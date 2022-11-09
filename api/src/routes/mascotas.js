const { Router } = require("express");
const router = Router();
const { Pet } = require("../db");
const { getMascotas } = require("./controllers");

router.post("/", async (req, res, next) => {
  const { nombre, descripcion, edad, imagen, tamaño, raza, sexo, especie } =
    req.body;

  try {
    let nuevaMascota = await Pet.create({
      nombre,
      descripcion,
      edad,
      imagen,
      tamaño,
      raza,
      sexo,
      especie,
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

module.exports = router;
