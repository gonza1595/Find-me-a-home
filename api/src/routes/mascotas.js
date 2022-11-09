const { Router } = require('express');
const router = Router();
const { Pet } = require('../db')


router.post('/', async (req, res, next) => {

    const { nombre, descripcion, edad, imagen, tamaño, raza, sexo, especie } = req.body
       
    try {
        let nuevaMascota = await Pet.create ({ 
            nombre,
            descripcion,
            edad,
            imagen,
            tamaño,
            raza,
            sexo,
            especie
        })
        //console.log(nuevaMascota)
        res.status(200).send(nuevaMascota)
    } catch(error) {
        next(error)
    }
})

module.exports = router;