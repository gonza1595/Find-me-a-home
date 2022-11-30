const { Pet, User, Comentario, Product, Orden, Donacion } = require("../db");
const db = require("../db.js");
const mascotasJson = require("../../mascotas.json");
const { userInfo } = require("os");

const setMascotasJson = async () => {
  try {
    const pets = mascotasJson.mascotas.map((pet) => {
      return {
        nombre: pet.nombre,
        descripcion: pet.descripcion,
        edad: pet.edad,
        imagen: pet.imagen,
        tamaño: pet.tamaño,
        raza: pet.raza,
        sexo: pet.sexo,
        especie: pet.especie,
      };
    });

    const mascotas = Pet.bulkCreate(pets);
    return mascotas;
  } catch (error) {
    console.log(error);
  }
};

const getMascotas = async () => {
  try {
    const pets = await Pet.findAll();

    if (pets.length === 0) {
      return setMascotasJson();
    } else {
      return pets;
    }
  } catch (error) {
    console.log(error);
  }
};

const filtroProductos = (array, filtro, orden, tipo) => {
  if (tipo) {
    const tipoProducto = array.filter((p) => p.tipo === tipo);

    if (filtro === "precio") {
      if (orden === "ASC") {
        tipoProducto.sort((a, b) => a.precio - b.precio);
        return tipoProducto;
      } else if (orden === "DESC") {
        tipoProducto.sort((a, b) => b.precio - a.precio);
        return tipoProducto;
      }
    } else if (filtro === "calificacion") {
      if (orden === "ASC") {
        tipoProducto.sort((a, b) => a.calificacion - b.calificacion);
        return tipoProducto;
      } else if (orden === "DESC") {
        tipoProducto.sort((a, b) => b.calificacion - a.calificacion);
        return tipoProducto;
      }
    } else {
      return tipoProducto;
    }
  } else {
    if (filtro === "precio") {
      if (orden === "ASC") {
        array.sort((a, b) => a.precio - b.precio);
        return array;
      } else if (orden === "DESC") {
        array.sort((a, b) => b.precio - a.precio);
        return array;
      }
    } else if (filtro === "calificacion") {
      if (orden === "ASC") {
        array.sort((a, b) => a.calificacion - b.calificacion);
        return array;
      } else if (orden === "DESC") {
        array.sort((a, b) => b.calificacion - a.calificacion);
        return array;
      }
    } else {
      return array;
    }
  }
};

const generateRandom = (len) => {
  let randomPass = "";
  let wordChars = "asdfghjklñpoiuytrewqzxcvbnm1234567890";

  for (let i = 0; i < len; i++) {
    randomPass += wordChars.charAt(
      Math.floor(Math.random() * wordChars.length)
    );
    console.log("randomPass en for:", randomPass);
  }
  console.log(randomPass);
  return randomPass;
};

// elimina un usuario por id

const borrarUsuario = async (id) => {
  try {
    await User.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw error;
  }
};

///////////////////////////////////////////////////////////

// trae comentarios de un producto por ID
const traeComentariosProducto = async (productId) => {
  try {
    const comentarios = await Comentario.findAll({
      where: {
        productId,
      },
    });
    return comentarios;
  } catch (error) {
    throw error;
  }
};

// agregar comentario por ID
const agregarComentario = async (userId, productId, texto) => {
  const producto = await Product.findByPk(productId.id);
  const usuario = await User.findByPk(userId[0]);
  try {
    if (!producto) {
      throw new Error(`El producto con el id: ${productId} no existe!`);
    }
    if (!usuario) {
      throw new Error(`El usuario con el id: ${userId} no existe!`);
    }
    const comentario = await Comentario.create({ texto, userId, productId });
    return comentario;
  } catch (error) {
    throw error;
  }
};

const eliminarComentario = async (comentarioId) => {
  try {
    const comentario = await Comentario.findByPk(comentarioId);
    await comentario.destroy();
  } catch (error) {
    throw error;
  }
};

const traeTodosLosComentarios = async () => {
  try {
    const comentarios = await Comentario.findAll();
    return comentarios;
  } catch (error) {
    throw error;
  }
};

//////////////////////////////////////////

const traeTodasLasOrdenes = async () => {
  const ordenes = await Orden.findAll();
  return ordenes;
};

const traeDetalleDeOrden = async (ordenId) => {
  try {
    let orden = await Orden.findOne({
      where: {
        id: ordenId,
      },
    });
    if (!orden) {
      throw new Error(`La orden ${ordenId} no existe`);
    }
    return orden;
  } catch (error) {
    throw error;
  }
};

const traeOrdenesDeUnUsuario = async (userID) => {
  try {
    const ordenesUsuario = await Orden.findAll({
      where: {
        userID,
      },
    });
    if (!ordenesUsuario) {
      throw new Error(`Para el ususario ${userID} no existen ordenes `);
    }
    return ordenesUsuario;
  } catch (error) {
    throw error;
  }
};

const cambiaEstadoOrden = async (ordenId, estado) => {
  try {
    let orden = await Orden.findByPk(ordenId);
    await orden.update({ estado: estado });
  } catch (error) {
    throw error;
  }
};

const crearOrden = async (userID, productos, montoTotal) => {
  try {
    let order = await Orden.create(
      {
        userID: userID,
        productos: productos,
        montoTotal: montoTotal,
      },
      {
        include: [
          {
            model: User,
            attributes: ["id"],
          },
        ],
      }
    );
    return order;
  } catch (error) {
    throw error;
  }
};

const traeTodasLasDonaciones = async () => {
  const donacion = await Donacion.findAll();
  return donacion;
};

module.exports = {
  getMascotas,
  filtroProductos,
  borrarUsuario,
  agregarComentario,
  eliminarComentario,
  generateRandom,
  traeComentariosProducto,
  traeTodosLosComentarios,
  traeTodasLasOrdenes,
  traeDetalleDeOrden,
  traeOrdenesDeUnUsuario,
  cambiaEstadoOrden,
  crearOrden,
  traeTodasLasDonaciones,
};
