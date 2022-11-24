const {verificarToken} = require("../helpers/generarToken");

const checkAuth = async (req, res, next) => {
    try{
      const token= req.headers.authorization.split(" ").pop();
      const tokenData= await verificarToken(token);
      console.log(tokenData);
      if(tokenData.id){
        next();
      }else {
        res.status(409).send({error: "acceso denegado"});
      }
    }catch(error){
       res.status(409).send({error: "acceso denegado"});
    }
};

module.exports= checkAuth;