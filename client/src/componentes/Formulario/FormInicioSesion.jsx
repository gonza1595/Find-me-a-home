import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import {login} from "../../services/login"
import './FormInicioSesion.css'

export default function FormInicioSesion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {login, isLogged} = useUser()

const history = useHistory();

useEffect(()=>{
  if(isLogged) history.push('/')
}, [isLogged, history]) //quiza tambien le tengo que poner el history, pero no deberia cambiar

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(username)
    login({username, password}) //fijarse si tiene que ser el mismo nombre que los models
   //history.push('/')

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