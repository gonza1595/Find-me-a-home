const jwt = require("jsonwebtoken");

const verificarToken= async (token) => {
    try{
      return jwt.verify(token, process.env.LLAVE);
    }catch(error){
        return null
    }
}

module.exports = {tokenSign, verificarToken};