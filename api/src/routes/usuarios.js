const {Router} = require('express');
const router = Router();
const {User, Product, Pet} = require('../db');
const {encrypt, compare} = require('../helpers/bcrypt');
const {tokenSign} = require('../helpers/generarToken');
const { User } = require('../db');
const {encrypt, compare} = require("../helpers/bcrypt");
const {tokenSign} = require("../helpers/generarToken");
const { mailUsuarioCreado } = require("../helpers/mailsService");

router.post('/registro', async (req, res) => {
	const {nombre, contraseña, correo, edad, direccion, rango} = req.body;

  try{
    const contraseñaHash= await encrypt(contraseña);
    const createUser= await User.create({
      nombre,
      contraseña: contraseñaHash,
      correo,
      edad,
      direccion,
      rango
    });
    
    ///// notificación por mail - usuario registrado

    const asunto = "Bienvenid@ a Find me a home";

    const texto = `<p>Hola ${nombre}!<br><br>Estamos muy felices de recibirte en Find me a home!<br><br>A partir de ahora vas a poder adoptar una mascota y comprar nuestros productos!<br><br>Por cualquier duda, nos escribís a findmeahome2022@gmail.com<br><br>Nos vemos!</p>`;

    mailUsuarioCreado(correo, asunto, texto);

    /////////

    res.status(200).send( createUser);
  }catch(error){
    res.status(400).send({error: error.message});
  }
});

router.post('/login', async (req, res) => {
	const {correo, contraseña} = req.body;

	try {
		const usuario = await User.findOne({
			where: {
				correo: correo,
			},
		});

		if (!usuario) {
			res.status(404).send({error: 'Usuario no encontrado'});
		}
		const checkContraseña = await compare(contraseña, usuario.contraseña);
		const tokenSesion = await tokenSign(usuario);
		if (checkContraseña) {
			res.status(200).send({usuario, tokenSesion});
		}
		if (!checkContraseña) {
			res.status(400).send({error: 'contraseña incorrecta'});
		}
	} catch (error) {
		res.status(400).send({error: 'contraseña incorrecta'});
	}
});

// trae todos los productos de la lista de favoritos del usuario por id

router.get('/favoritos', async (req, res) => {
	const {userId} = req.query;
	try {
		const usuario = await User.findOne({
			where: {
				id: userId,
			},
		});
		const favoritosUsuario = usuario.favoritos;
		if (!usuario) {
			return res.status(400).send('No existe usuario');
		} else if (!favoritosUsuario) {
			return res.status(400).send('Este usuario no tiene favoritos');
		} else {
			return res.status(200).json(favoritosUsuario);
		}
	} catch (error) {
		console.log(error);
	}
});

// agrega productos a la lista de favoritos del usuario por id

router.post('/favoritos', async (req, res) => {
	const {userId, productId} = req.body;
	try {
		const usuario = await User.findByPk(userId);
		const producto = await Product.findByPk(productId);
		if (!producto) {
			res.status(400).send('El producto no existe');
		} else if (!usuario.favoritos.includes(productId)) {
			await usuario.update({
				favoritos: [...usuario.favoritos, productId],
			});
			res.status(200).send('Agregado con exito!');
		} else {
			res.status(400).send('El producto ya esta agregado a favoritos');
		}
	} catch (error) {
		res.status(404).send(error);
	}
});

module.exports = router;
