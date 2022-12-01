import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {formularioLogin} from "../../redux/actions/index"
import './FormInicioSesion.css'
import { gapi } from "gapi-script";
import Google from "../Google";



export default function FormInicioSesion() {

  const [correo, setUsername] = useState("");
  const [contraseña, setPassword] = useState("");

  const modo = localStorage.getItem('modo');


  // useEffect(() => {
  //   dispatch(traerUsuarios());
  // }, []);
 
  // const users = useSelector((state) => state.usuarios);

  // const user = users.find((e)=> e.correo === correo)

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

      dispatch(formularioLogin(correo,contraseña));

      
      alert("Login Exitoso");

      history.push('/')

      window.location.reload();

    }
  };


///GOOGLE

const clientID ="937620879306-paserb1mqre208feu49eakrpjogk8eip.apps.googleusercontent.com"
const [user, setUser] = useState({});
const [loggeIn, setLoggetInfo] = useState(false); 

const onSuccess = (response) => {
  setUser(response.profileObj);

  console.log(response)

  const correo = response.profileObj.email
  const contraseña =  response.googleId

  dispatch(formularioLogin(correo,contraseña))
  document.getElementsByClassName("btn").hidden = true;

  alert("login exitoso")

  history.push("/")

  window.location.reload();
}


const onFailure = (response) => {
  console.log(response);
  console.log(response.profileObj);
}


const handleLogout  = () => {
  setUser({}); 
}
useEffect(() => {
  function start() {
    gapi.auth2.init({ 
      clientId: clientID,
    });
  }
  gapi.load("client:auth2", start);
});



  return (
  <div className={`cajita-inicio ${modo}`}>
        <form className="formInicio"  onSubmit={handleSubmit}>
      <h1 className={`titulo-sesion ${modo}`}>Iniciar Sesion</h1>
      <div  className={`input-fields-sesion ${modo}`}>
        <label>
            Correo:{" "}
            <input  className={`input-InicioSesion ${modo}`}
            type="email"
            placeholder="correo"
            onChange={(e) => setUsername(e.target.value)}
          />
          </label>
          <div>
          <label >
            Contraseña:{" "}
            <input   className={`input-InicioSesion ${modo}`}
              type="password"
              placeholder="contraseña"
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          </div>
        <div className="boton-Sesion">
        <button>Iniciar Sesion</button>
       
        </div>

        <div className={`olvideContra ${modo}`}>
          <Link to="/solicitarContraseña">
          <a>Olvide mi contraseña</a>
        </Link>
</div>

          <div className="boton-registrate">        
          <button>
          <Link to='/registrate' role="button">Registrate ahora!</Link>
          </button>

  <div className="botondeGoogleSesion">

<GoogleLogin
 
  clientId={clientID}
  onSuccess={onSuccess} //si le cambio a onfailure puedo ver la data guardada
  onFailure={onFailure}
  buttonText="Ingresar con Google"
  cookiePolicy={"single_host_origin"}
 
/>

</div>


  </div>  
  
  </div>

<div>


</div>



        </form>
        </div>
  );
}