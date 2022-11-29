const { Router } = require("express");
const { Op, where } = require("sequelize");
const router = Router();
const { Product } = require("../db");
const products = require("../../productos.json");
const { filtroProductos } = require("./controllers");
const { subirImagen } = require("../helpers/cloudinary");
const fs = require("fs-extra");

router.get("/", async (req, res) => {
  const { filtro, orden, nombre, tipo } = req.query;
  try {
    const allProducts = await Product.findAll();

    if (!allProducts.length) {
      const productos = products.productos.map((p) => {
        return {
          nombre: p.nombre,
          descripcion: p.descripcion,
          precio: p.precio,
          imagen: p.imagen,
          // comentarios: p.comentarios,
          // calificacion: p.calificacion,
          stock: p.stock,
          tipo: p.tipo,
          estado: p.estado,
        };
      });

      const createProduct = await Product.bulkCreate(productos);
      const creados = await Product.findAll();
      res.status(201).send(creados);
    } else {
      if (nombre) {
        const nombreProducto = await Product.findAll({
          where: {
            nombre: {
              [Op.iLike]: "%" + nombre + "%",
            },
          },
        });
        try {
          const productoNombre = await nombreProducto.map((p) => {
            return {
              id: p.id,
              nombre: p.nombre,
              descripcion: p.descripcion,
              imagen: p.imagen,
              stock: p.stock,
              precio: p.precio,
              comentarios: p.comentarios,
              calificacion: p.calificacion,
              tipo: p.tipo,
              estado: p.estado,
            };
          });
          const productoNombreFiltrado = await filtroProductos(
            productoNombre,
            filtro,
            orden,
            tipo
          );
          res.status(200).send(productoNombreFiltrado);
        } catch (error) {
          res.status(400).send("producto no encontrado");
        }
      } else {
        const productos = await allProducts.map((p) => {
          return {
            id: p.id,
            nombre: p.nombre,
            descripcion: p.descripcion,
            imagen: p.imagen,
            stock: p.stock,
            precio: p.precio,
            comentarios: p.comentarios,
            calificacion: p.calificacion,
            tipo: p.tipo,
            estado: p.estado,
          };
        });
        const filtrados = await filtroProductos(productos, filtro, orden, tipo);
        res.status(200).send(filtrados);
      }
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/", async (req, res, next) => {
  const {
    nombre,
    descripcion,
    imagen,
    stock,
    calificacion,
    precio,
    tipo,
    estado,
    comentarios,
  } = req.body;
  console.log(req.files);

  ///// cloudinary

  if (req.files?.imagen) {
    const foto = await subirImagen(req.files.imagen.tempFilePath);
    var foto_url = foto.secure_url;
  }
  await fs.unlink(req.files?.imagen.tempFilePath);

  ///// cloudinary

  try {
    let nuevoProducto = await Product.create({
      nombre,
      comentarios,
      descripcion,
      imagen: foto_url,
      stock,
      calificacion,
      precio,
      tipo,
      estado,
    });

    res.status(200).send(nuevoProducto);
  } catch (error) {
    next(error);
  }
});

router.put("/agregarComentario", async (req, res) => {
  const { id, comentarios } = req.body;

  console.log(id.id, comentarios);

  const nuevoComentario = comentarios;

  try {
    const productoEncontrado = await Product.findOne({
      where: {
        id: id.id,
      },
    });

    const comentariosEx = productoEncontrado.comentarios;

    comentariosEx.push(nuevoComentario);

    console.log(comentariosEx, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

    const productoAc = {
      nombre: productoEncontrado.nombre,
      descripcion: productoEncontrado.descripcion,
      imagen: productoEncontrado.imagen,
      stock: productoEncontrado.stock,
      calificacion: productoEncontrado.calificacion,
      precio: productoEncontrado.precio,
      comentarios: comentariosEx,
      tipo: productoEncontrado.tipo,
      estado: productoEncontrado.estado,
    };

    console.log(productoAc);

    await Product.update(productoAc, {
      where: { id: id.id },
    });

    const dataActualizada = productoAc;

    res.status(200).json(dataActualizada);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.put("/editarProducto", async (req, res) => {
  const { id } = req.query;
  const {
    comentarios,
    nombre,
    descripcion,
    imagen,
    stock,
    calificacion,
    precio,
    tipo,
    estado,
  } = req.body;
  const producto = {
    nombre,
    descripcion,
    imagen,
    stock,
    calificacion,
    precio,
    comentarios,
    tipo,
    estado,
  };
  try {
    const productoEncontrado = await Product.findOne({
      where: {
        id: id,
      },
    });
    await productoEncontrado.update(producto, { where: { id: id } });

    await productoEncontrado.save();
    const dataActualizada = {
      nombre: productoEncontrado.nombre,
      descripcion: productoEncontrado.descripcion,
      imagen: productoEncontrado.imagen,
      stock: productoEncontrado.stock,
      comentarios: productoEncontrado.comentarios,
      calificacion: productoEncontrado.calificacion,
      precio: productoEncontrado.precio,
      tipo: productoEncontrado.tipo,
      estado: productoEncontrado.estado,
    };
    res.status(200).json(dataActualizada);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await borrarProducto(id);
    res.status(200).send("Producto borrado correctamente");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

const borrarProducto = async (id) => {
  try {
    await Product.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw error;
  }
};

module.exports = router;
