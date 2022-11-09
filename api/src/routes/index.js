const {Router} = require('express');
const mascotas = require('./mascotas');
const getMascotasById = require('./getMascotaById.js');
const getAllProducts = require("./productos");
const router = Router();

// Configurar los routers

router.use('/mascotas', mascotas);
router.use('/mascotas', getMascotasById);
router.use("/productos", getAllProducts);
module.exports = router;
