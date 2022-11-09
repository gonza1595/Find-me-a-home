const {Router} = require('express');
const mascotas = require('./mascotas');
const productos = require('./productos');
const getMascotasById = require('./getMascotaById.js');
<<<<<<< HEAD
const getAllProducts = require("./productos");
=======
const getProductosById = require('./getProductosById');
const getAllProducts = require('./productos');
>>>>>>> dcd72fbcf601645629d88f94216ce01b70843838
const router = Router();

// Configurar los routers

router.use('/mascotas', mascotas);
<<<<<<< HEAD
router.use('/mascotas/:id', getMascotasById);
router.use("/productos", getAllProducts);
=======
router.use('/mascotas', getMascotasById);
router.use("/productos", getAllProducts);
router.use('/productos', getAllProducts);
router.use('/productos', getProductosById);
router.use('/productos', productos);

>>>>>>> dcd72fbcf601645629d88f94216ce01b70843838
module.exports = router;
