const {Router} = require('express');
const {DATEONLY} = require('sequelize');
const router = Router();
const {Pet} = require('../db');
const {getMascotas} = require('./controllers');

router.post('/', async (req, res, next) => {
	const {nombre, descripcion, edad, imagen, tamaño, raza, sexo, especie} =
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

router.get('/', async (req, res) => {
	try {
		const {nombre} = req.query;
		const allMascotas = await getMascotas();
		if (nombre) {
			const nameMascotas = allMascotas.filter(
				(p) => p.nombre.toLowerCase().trim() === nombre.toLowerCase().trim()
			);
			if (nameMascotas.length > 0) {
				res.status(200).send(nameMascotas);
			} else {
				res.status(400).send({msg: 'El nombre ingresado no existe'});
			}
		} else {
			res.status(200).send(allMascotas);
		}
	} catch (error) {
		console.log(error);
	}
});

router.put('/:id', async (req, res) => {
	const {id} = req.params;
	const mascota = req.body;
	req.body;
	try {
		const actualizacion = await Pet.update(
			{
				nombre: mascota.nombre,
				descripcion: mascota.descripcion,
				imagen: mascota.imagen,
				edad: mascota.edad,
				tamaño: mascota.tamaño,
				raza: mascota.raza,
				sexo: mascota.sexo,
				especie: mascota.especie,
			},
			{
				where: {
					id,
				},
			}
		);
		return res.status(200).json(actualizacion);
	} catch (error) {
		res.status(404).json(error);
	}
});

module.exports = router;
