const { Router } = require("express");
const mascotas = require('./mascotas');

const router = Router();

// Configurar los routers

router.use('/mascotas', mascotas);

module.exports = router;
