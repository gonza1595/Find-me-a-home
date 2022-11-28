import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {formularioLogin, login, traerUsuarios} from "../../redux/actions/index"
import './FormInicioSesion.css'

export default function FormInicioSesion() {

  const [correo, setUsername] = useState("");
  const [contraseña, setPassword] = useState("");

  useEffect(() => {
    dispatch(traerUsuarios());
  }, []);
 
  const users = useSelector((state) => state.usuarios);

  const user = users.find((e)=> e.correo === correo)

const history = useHistory();
const dispatch = useDispatch();


  const cambioContraseña = (e) => {

  };

  const handleSubmit = (e) => {
    // e.preventDefault();  

    if (!correo || !contraseña ) {

      e.preventDefault();
      alert("Verifique los campos para poder continuar");
    } else {
      e.preventDefault();
      dispatch(login(user.id))
      dispatch(formularioLogin(correo,contraseña));
      // alert("Login Exitoso");
      history.push('/')

    }
  };

  return (
    
  <div className="cajita-inicio">
        <form className="formInicio"  onSubmit={handleSubmit}>
      <h1 className="titulo-sesion">Iniciar Sesion</h1>
      <div  className='input-fields-sesion'>
        <label>
            Correo:{" "}
            <input  className="input-InicioSesion"
            type="email"
            placeholder="correo"
            onChange={(e) => setUsername(e.target.value)}
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
            />
          </label>
          </div>
        <div className="boton-Sesion">
        <button >Iniciar Sesion</button>
        </div>
       

          <div className="boton-registrate">        
          <button className="inicioGoogle">Iniciar con Google</button>
           <button>
          <Link to='/registrate' role="button">Registrate ahora!</Link>
          </button>
  </div>  
  </div>
        </form>
        </div>
  
  );
}