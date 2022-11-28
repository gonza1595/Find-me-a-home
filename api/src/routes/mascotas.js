const { Router } = require("express");
const { DATEONLY } = require("sequelize");
const router = Router();
const { Pet } = require("../db");
const { getMascotas } = require("./controllers");
const { subirImagen } = require("../helpers/cloudinary");
const fs = require('fs-extra')
const {mailUsuarioCreado} = require ("../helpers/mailsService")

router.post("/", async (req, res, next) => {
  const { nombre, descripcion, edad, imagen, tamaño, raza, sexo, especie, estado } =
    req.body;

  ///// cloudinary

  if(req.files?.imagen){
    const foto = await subirImagen(req.files.imagen.tempFilePath)
    var foto_url = foto.secure_url
  }
  await fs.unlink(req.files?.imagen.tempFilePath)

  ///// cloudinary

  try {
    let nuevaMascota = await Pet.create({
      nombre,
      descripcion,
      edad,
      imagen: foto_url,
      tamaño,
      raza,
      sexo,
      especie,
      estado,
    });
    //console.log(nuevaMascota)
    res.status(200).send(nuevaMascota);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const { nombre } = req.query;
    const allMascotas = await getMascotas();
    if (nombre) {
      const nameMascotas = allMascotas.filter(
        (p) => p.nombre.toLowerCase().trim() === nombre.toLowerCase().trim()
      );
      if (nameMascotas.length > 0) {
        res.status(200).send(nameMascotas);
      } else {
        res.status(400).send({ msg: "El nombre ingresado no existe" });
      }
    } else {
      res.status(200).send(allMascotas);
    }
  } catch (error) {
    console.log(error);
  }
});

router.put("/editarMascota", async (req, res) => {
  const { id } = req.query;
  const { nombre, descripcion, imagen, edad, tamaño, raza, sexo, especie, estado } =
    req.body;
  const mascota = {
    nombre,
    descripcion,
    imagen,
    edad,
    tamaño,
    raza,
    sexo,
    especie,
    estado,
  };
  try {
    const mascotaEncontrada = await Pet.findOne({
      where: {
        id: id,
      },
    });
    await mascotaEncontrada.update(mascota, { where: { id: id } });

    await mascotaEncontrada.save();
    const dataActualizada = {
      nombre: mascotaEncontrada.nombre,
      descripcion: mascotaEncontrada.descripcion,
      imagen: mascotaEncontrada.imagen,
      edad: mascotaEncontrada.edad,
      tamaño: mascotaEncontrada.tamaño,
      raza: mascotaEncontrada.raza,
      sexo: mascotaEncontrada.sexo,
      especie: mascotaEncontrada.especie,
      estado: mascotaEncontrada.estado,
    };
    res.status(200).json(dataActualizada);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await borrarMascota(id);
    res.status(200).send("Mascota borrada correctamente");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

const borrarMascota = async (id) => {
  try {
    await Pet.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw error;
  }
};


router.post("/fomAdopcion", async (req, res) => {
  const { nombre, correo} = req.body;

  try {
    ///// notificación por mail - mascota adoptada

    const asunto = "Gracias por adoptar en Find me a Home ";

    const texto = `<p>Hola ${nombre}!<br><br>Gracias por adoptar pronto recibiras una respuesta del refugio <br><br>Por cualquier duda, nos escribís a findmeahome2022@gmail.com
						<br><br>Nos vemos!</p>`;

     mailUsuarioCreado(correo, asunto, texto);

    /////////

    res.status(200).send();
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});



module.exports = router;
