const {Router} = require('express');
const mascotas = require('./mascotas');
const productos = require('./productos');
const getMascotasById = require('./getMascotaById.js');
const getProductosById = require('./getProductosById');
const getAllProducts = require('./productos');
const postUser = require('./usuarios');
const pagos = require('./pagos');
const checkAuth = require('../middleware/auth');
const checkRangoAuth = require('../middleware/rangoAuth');
const comentarios = require('./comentarios');
const ordenes = require('./ordenes');
const donaciones= require("./donaciones");
const router = Router();

// Configurar los routers

router.use('/mascotas',  mascotas);
router.use('/mascotas/', getMascotasById);
router.use('/productos', getAllProducts);
router.use('/productos/', getProductosById);
router.use('/productos',  productos);
router.use('/usuario', postUser);
router.use('/pagos', pagos);
router.use('/comentarios', comentarios);
router.use('/ordenes', ordenes);
router.use("/donaciones", donaciones);

module.exports = router;
