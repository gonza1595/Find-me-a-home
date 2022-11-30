const { Router } = require("express");
const router = Router();
const { User, Product, Pet } = require("../db");
const { encrypt, compare } = require("../helpers/bcrypt");
const { tokenSign } = require("../helpers/generarToken");
const { mailUsuarioCreado } = require("../helpers/mailsService");
const { borrarUsuario, generateRandom } = require("./controllers.js");

// ruta para traer los usuarios

router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users.length) {
      res.status(400).send({ error: "No se encontraron usuarios" });
    } else {
      res.status(200).send(users);
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// ruta para traer usuarios por id

router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userId = await User.findOne({
      where: {
        id: id,
      },
    });
    if (userId) {
      res.status(200).send(userId);
    } else {
      res.status(400).send("No hay ningun usuario con el id ingresado");
    }
  } catch (error) {
    console.log(error);
  }
});

// ruta para borrar usuarios por id

router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json(await borrarUsuario(id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ruta para editar usuario

router.put("/editarUsuario", async (req, res) => {
  const { id } = req.query;
  const { nombre, correo, edad, direccion, rango } = req.body;
  const user = {
    nombre,
    correo,
    edad,
    direccion,
    rango,
  };

  const userEncontrado = await User.findOne({
    where: {
      id: id,
    },
  });

  await userEncontrado.update(user, { where: { id: id } });
  await userEncontrado.save();
  const userActualizado = {
    nombre: userEncontrado.nombre,
    contraseña: userEncontrado.contraseña,
    correo: userEncontrado.correo,
    edad: userEncontrado.edad,
    direccion: userEncontrado.direccion,
    rango: userEncontrado.rango,
  };
  res.status(200).send(userActualizado);
});

router.post("/registro", async (req, res) => {
  const { nombre, contraseña, correo, edad, direccion, rango } = req.body;

  try {
    const contraseñaHash = await encrypt(contraseña);
    const createUser = await User.create({
      nombre,
      contraseña: contraseñaHash,
      correo,
      edad,
      direccion,
      rango,
    });

    ///// notificación por mail - usuario registrado

    const asunto = "Bienvenid@ a Find me a home";

    const texto = `<p>Hola ${nombre}!<br><br>Estamos muy felices de recibirte en Find me a home!<br><br>A partir de ahora vas a poder adoptar 
		 				una mascota y comprar nuestros productos!<br><br>Por cualquier duda, nos escribís a findmeahome2022@gmail.com
						<br><br>Nos vemos!</p>`;

     mailUsuarioCreado(correo, asunto, texto);

    /////////

    res.status(200).send(createUser);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { correo, contraseña } = req.body;
  console.log(correo, contraseña);
  try {
    const usuario = await User.findOne({
      where: {
        correo: correo,
      },
    });

    if (!usuario) {
      res.status(404).send("Usuario no encontrado" );
    }

      const checkContraseña = await compare(contraseña, usuario.contraseña);
      const tokenSesion = await tokenSign(usuario);

      if (checkContraseña) {
        res.status(200).send({
           id: usuario.id, 
           tokenSesion, 
           rango:usuario.rango
          });

        }
      if (!checkContraseña) {
        res.status(400).send({ error: "contraseña incorrecta" });
      }
    

  }catch (error) {
   console.log(error);
  }
});

router.put("/nueva-pass", async (req, res) => {
  const {correo} = req.body;
  const nuevaContraseña= generateRandom(6);
  console.log(nuevaContraseña);
  console.log(correo);
  try{
    const contraseñaHash = await encrypt(nuevaContraseña);
    const usuario = await User.findOne({
      where: {
        correo: correo
      }
    });

    if(usuario){

      await usuario.update({
        contraseña: contraseñaHash
      });
      await usuario.save();
    }

    const asunto= "Nueva contraseña Find Me a Home"
    
    const texto= `Hola ${usuario.nombre}<br></br> A su peticion le hemos generado una nueva contraseña provisoria: <br></br><h2>${nuevaContraseña}</h2><br></br>sientase libre de cambiarla en cualquier momento.<br></br>Saludos atentos, equipo de Find Me a Home`
    mailUsuarioCreado(correo, asunto, texto);

    res.status(200).send(`se a enviado una nueva contraseña a ${correo}`);
  }catch(error){
    res.status(400).send({error: "correo no encontrado"});
  }
} );


router.put("/login/new-pass", async (req, res) => {
  const{correo, contraseña, nuevaContraseña} = req.body;

  try{
    const contraseñaHash = await encrypt(nuevaContraseña);
    const usuario= await User.findOne({
      where: {
        correo: correo
      }
    });

    if(!usuario){
      res.status(404).send("usuario no encontrado");
    }
    const checkContraseña = await compare(contraseña, usuario.contraseña);

    if(!checkContraseña){
      res.status(400).send("contraseña incorrecta");
    }

    if(checkContraseña){
      await usuario.update({
        contraseña: contraseñaHash
      });
      await usuario.save();

      res.status(200).send("contraseña modificada con éxito");
    }
    
  }catch(error){
    res.status(400).send({error: error.message});
  }
})

//// USUARIO FAVORITOS PRODUCTO ////

// trae todos los productos de la lista de favoritos del usuario por id

router.get("/favoritos-producto", async (req, res) => {
  const { userId } = req.query;
  try {
    const usuario = await User.findOne({
      where: {
        id: userId,
      },
    });
    const favoritosUsuario = usuario.favoritoProducto;
    if (!usuario) {
      return res.status(400).send("No existe usuario");
    } else if (!favoritosUsuario) {
      return res.status(400).send("Este usuario no tiene favoritos");
    } else {
      return res.status(200).json(favoritosUsuario);
    }
  } catch (error) {
    console.log(error);
  }
});

// agrega productos a la lista de favoritos del usuario por id

router.post("/favoritos-producto", async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const usuario = await User.findByPk(userId);
    const producto = await Product.findByPk(productId);
    if (!producto) {
      res.status(400).send("El producto no existe");
    } else if (!usuario.favoritoProducto.includes(productId)) {
      await usuario.update({
        favoritoProducto: [...usuario.favoritoProducto, productId],
      });
      res.status(200).send("Agregado con exito!");
    } else {
      res.status(400).send("El producto ya esta agregado a favoritos");
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

// elimina productos de la lista de favoritos del usuario por id

router.delete("/favoritos-producto", async function (req, res) {
  const { userId, productId } = req.body;
  try {
    const user = await User.findByPk(userId);
    await user.update({
      favoritoProducto: user.favoritoProducto.filter((e) => e !== productId),
    });
    res.status(200).send("El producto fue eliminado de favoritos");
  } catch (error) {
    res.status(404).send(error);
  }
});

//// FIN USUARIO FAVORITOS PRODUCTO ////

//// USUARIO FAVORITOS MASCOTA ////

router.get("/favoritos-mascota", async (req, res) => {
  const { userId } = req.query;
  try {
    const usuario = await User.findOne({
      where: {
        id: userId,
      },
    });
    const favoritosMascotaUsuario = usuario.favoritoMascota;
    if (!usuario) {
      return res.status(400).send("No existe usuario");
    } else if (!favoritosMascotaUsuario) {
      return res
        .status(400)
        .send("Este usuario no tiene mascotas en favoritos");
    } else {
      return res.status(200).json(favoritosMascotaUsuario);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/favoritos-mascota", async (req, res) => {
  const { userId, petId } = req.body;
  try {
    const usuario = await User.findByPk(userId);
    const mascota = await Pet.findByPk(petId);
    if (!mascota) {
      res.status(400).send("La mascota no existe");
    } else if (!usuario.favoritoMascota.includes(petId)) {
      await usuario.update({
        favoritoMascota: [...usuario.favoritoMascota, petId],
      });
      res.status(200).send("Agregado con exito!");
    } else {
      res.status(400).send("La mascota ya esta agregada a favoritos");
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

router.delete("/favoritos-mascota", async function (req, res) {
  const { userId, petId } = req.body;
  try {
    const user = await User.findByPk(userId);
    await user.update({
      favoritoMascota: user.favoritoMascota.filter((e) => e !== petId),
    });
    res.status(200).send("La mascota fue eliminada de favoritos");
  } catch (error) {
    res.status(404).send(error);
  }
});

//// FIN USUARIO FAVORITOS MASCOTA ////

module.exports = router;
