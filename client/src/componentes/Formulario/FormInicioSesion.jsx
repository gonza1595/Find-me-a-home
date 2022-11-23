import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {formularioLogin} from "../../redux/actions/index"
import './FormInicioSesion.css'

export default function FormInicioSesion() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
 

const history = useHistory();
const dispatch = useDispatch();


  const cambioContraseña = (e) => {

  };

  const handleSubmit = (e) => {
    // e.preventDefault();  
    if (!username || !password ) {
      e.preventDefault();
      alert("Verifique los campos para poder continuar");
    } else {
      e.preventDefault();
      dispatch(formularioLogin(username,password));
      alert("Login Exitoso");
      // history.push('/')
    }
  };

  return (
    
  <div className="container-InicioSesion">
        <form  onSubmit={handleSubmit}>
      <h1 className="titulo-sesion">Iniciar Sesion</h1>
      <div  className='input-fields-sesion'>
        <label>
            Correo:{" "}
            <input  className="input-InicioSesion"
            type="email"
            placeholder="correo"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          </label>
<div>
          <label >
            Contraseña:{" "}
            <input   className="input-InicioSesion"
              type="password"
              placeholder="contraseña"
              autoComplete="on"
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