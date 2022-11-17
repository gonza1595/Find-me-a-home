const {Router} = require('express');
const {Pet, User} = require('../db.js');
const jsonMascotas = require('../../mascotas.json');
const router = Router();

router.get('/:id', async (req, res, next) => {
	const {id} = req.params;
	try {
		if (id.includes('-')) {
			const buscaEnBaseDeDatos = await Pet.findByPk(id, {include: User});
			return res.status(200).json(buscaEnBaseDeDatos);
		} else {
			const buscaEnJson = jsonMascotas.mascotas.filter(
				(mascota) => mascota.id === id
			);
			buscaEnJson.length > 0
				? res.status(200).json(buscaEnJson)
				: res.status(400).json({msj: `ID: ${id}, not found`});
		}
	} catch (error) {
		res.status(404).json(error);
	}
});

module.exports = router;
