const { Router } = require('express');
const router = Router();
const { User } = require('../db');
const {encrypt, compare} = require("../helpers/bcrypt");
const {tokenSign} = require("../helpers/generarToken");

router.post("/registro" , async (req, res) => {
    const {nombre, contraseña, correo, edad, direccion, rango}= req.body;

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
      res.status(200).send( createUser);
    }catch(error){
        res.status(400).send({error: error.message});
    }
});

router.post("/login" , async (req, res) => {
     const {correo, contraseña} = req.body;

     try{
       const usuario= await User.findOne({
        where: {
            correo: correo
        }
       });

       if(!usuario){
        res.status(404).send({error: "Usuario no encontrado"});
       }
       const checkContraseña= await compare(contraseña, usuario.contraseña);
       const tokenSesion= await tokenSign(usuario);
       if(checkContraseña) {
        res.status(200).send({usuario, tokenSesion});
       }
       if(!checkContraseña){
        res.status(400).send({error: "contraseña incorrecta"});
       }
     }catch(error){
        res.status(400).send({error: "contraseña incorrecta"});
     }
});

module.exports= router;