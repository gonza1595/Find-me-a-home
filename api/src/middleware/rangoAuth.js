const { verificarToken } = require("../helpers/generarToken");
const { User } = require("../db");

const checkRangoAuth = (rangos) => async (req, res, next) => {
    try{
       const token= req.headers.authorization.split(" ").pop();
       const tokenData= await verificarToken(token);
       const usuarioData= await User.findById(tokenData.id);

       if([].concat(rangos).includes(usuarioData.rango)) {
        next();
       }else{
        res.status(409).send({error: "no tienes permisos"});
       }
    }catch(error){
       res.status(409).send({error: "no tienes permisos"});
    }
};

module.exports = checkRangoAuth;