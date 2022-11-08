const {Router} = require('express');
const mascotas = require('./mascotas');
const getMascotasById = require('./getMascotaById.js');
const router = Router();

// Configurar los routers

router.use('/mascotas', mascotas);
router.use('/mascotas', getMascotasById);

module.exports = router;
