const { Router } = require('express');
const router = Router();
const { User } = require('../db');

router.post("/" , async (req, res) => {
    const user= req.body;

    try{
      const createUser= await User.create(user);
      res.status(200).send("Usuario creado correctamente");
    }catch(error){
        res.status(400).send({error: error.message});
    }
});

module.exports= router;