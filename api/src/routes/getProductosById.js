const {Router} = require('express');
const {Product, User} = require('../db.js');
const jsonProductos = require('../../productos.json');
const router = Router();

router.get('/:id', async (req, res, next) => {
	const {id} = req.params;
	try {
		if (id.includes('-')) {
			const buscaEnBaseDeDatos = await Product.findByPk(id);
			return res.status(200).json(buscaEnBaseDeDatos);
		} else {
			const buscaEnJson = jsonProductos.productos.filter(
				(producto) => producto.id === id
			);
			buscaEnJson.length > 0
				? res.status(200).json(buscaEnJson)
				: res.status(400).json({msj: `ID: ${id}, no existe`});
		}
	} catch (error) {
		res.status(404).json(error);
	}
});
module.exports = router;
