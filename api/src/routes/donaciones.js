const { Router } = require("express");
const { Donacion } = require("../db");
const router = Router();
const { traeTodasLasDonaciones } = require("./controllers");

router.post("/", async (req, res) => {
  const { refugio, userID, montoTotal } = req.body;
  try {
    const donacion = await Donacion.create({
      refugio: refugio,
      userID: userID,
      montoTotal: montoTotal,
    });

    res.status(200).send(donacion);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const donaciones = await traeTodasLasDonaciones();
    res.status(200).json(donaciones);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
