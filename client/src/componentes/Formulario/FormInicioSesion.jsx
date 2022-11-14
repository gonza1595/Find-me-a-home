import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import './FormInicioSesion.css'

export default function FormInicioSesion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


//const history = useHistory();



  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(username)
    //history.push('/')
 

  };

  return (
    
  <div className="container-InicioSesion">
        <form  onSubmit={handleSubmit}>
      <h1 className="titulo-sesion">Inciar Sesion</h1>
      <div  className='input-fields-sesion'>
        <label>
            Usuario:
            <input  className="input-InicioSesion"
            placeholder="usuario"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          </label>
<div>
          <label >
            Contraseña:
            <input   className="input-InicioSesion"
              type="password"
              placeholder="contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          </div>
        <div className="boton-Sesion">
        <button >Iniciar Sesion</button>
        </div>
       

          <div>        
          <button>Iniciar con Google</button>
         </div>
          <div className="boton-registrate">
            <button>
          <Link to='/registrate' role="button">Registrate ahora!</Link>
          </button>
  </div>  
  </div>
        </form>
        </div>
  
  );
}