import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";
import { formularioRegistroUsuario } from "../../redux/actions/index";
import "./FormUsuario.css";
/* recordar cuando usar usuario */

function validate(input) {
  let errors = {};

  if (!input.nombre) {
    errors.nombre = "Se requiere un nombre";
  } else if (!input.contraseña) {
    errors.contraseña = "Se requiere una contraseña";
  } else if (!input.correo || !input.correo.includes("@")) {
    errors.correo = "Se requiere correo";
  } else if (!input.edad) {
    errors.edad = "Se requiere edad";
  } else if (!input.direccion) {
    errors.direccion = "Se requiere direccion";
  } else if (!input.rango) {
    errors.rango = "Se requiere rango";
  }

  return errors;
}

export default function Form() {
  const dispatch = useDispatch();
  const history = useHistory();
  const usuario = useSelector((state) => state.usuario); //no haria falta


  const clientID ="937620879306-paserb1mqre208feu49eakrpjogk8eip.apps.googleusercontent.com"
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});
  const modo = localStorage.getItem('modo');

  // Inputs
  const [input, setInput] = useState({
    nombre: "",
    contraseña: "",
    correo: "",
    edad: "",
    direccion: "",
    rango: "",
    usuario: [],
  });


  const onSuccess = (response) => {
    setUser(response.profileObj);

    const res = {
      nombre : response.profileObj.name,
      contraseña : response.googleId ,
      correo: response.profileObj.email 

    }
console.log(response)

    dispatch(formularioRegistroUsuario(res))
    document.getElementsByClassName("btn").hidden = true;

    alert("Usuario creado")

    history.push("/")


  }
  const onFailure = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }


  function handleChange(e) {
    e.preventDefault();
    console.log(input);
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(
      validate({
        ...input,
        [e.target.name]: [e.target.value],
      })
    );
  }

  function handleCheck(e) {
    // rango
    if (e.target.checked) {
      console.log(input);

      setInput({
        ...input,
        rango: e.target.value, // [e.target.name]
      });
    }
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    if (
      !input.nombre ||
      !input.contraseña ||
      !input.correo ||
      !input.edad ||
      !input.direccion ||
      !input.rango
    ) {
      e.preventDefault();
      alert("Verifique los campos para poder continuar");
    } else {
      e.preventDefault();
      dispatch(formularioRegistroUsuario(input));
      alert("Su usuario ha sido creado exitosamente");
      
            history.push("/iniciarSesion"); //fijarse si se deja o no

      setInput({
        nombre: "",
        contraseña: "",
        correo: "",
        edad: "",
        direccion: "",
        rango: "",
      });
    }
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

return (
<div className={`cajita-usuario ${modo}`}>
       <form   className={`container_formUs ${modo}`} onSubmit={(e) => handleSubmit(e)}>
                  <h1 className={`welcome ${modo}`}>Registrarse</h1>
       <div>
 <div className='window'>

   <div className={`input-fields ${modo}`}>
           <div>
               <label >Nombre: </label>
               <input className={`input-line full-width  ${modo}`}type="text" autoComplete="off" value={input.nombre} name='nombre' onChange={handleChange}/>
               {errors.nombre && (<p>{errors.nombre}</p>)}
           </div>
           <div>
               <label >Contraseña: </label>
               <input className={`input-line full-width  ${modo}`} type="password" autoComplete="off" value={input.contraseña} name='contraseña' onChange={handleChange}/>
               {errors.contraseña && (<p>{errors.contraseña}</p>)}
           </div>
           <div>
               <label >Correo: </label>
               <input className={`input-line full-width  ${modo}`} type="text" autoComplete="off" value={input.correo} name='correo' onChange={handleChange}/>
               {errors.correo && (<p>{errors.correo}</p>)}
           </div>
           <div>
               <label>Edad: </label>
               <input className={`input-line full-width  ${modo}`}type="number" autoComplete="off" value={input.edad} name='edad' onChange={handleChange}/>
               {errors.edad && (<p>{errors.edad}</p>)}
           </div>
           <div>
               <label >Direccion: </label>
               <input  className={`input-line full-width  ${modo}`} type="text" autoComplete="off" value={input.direccion} name='direccion' onChange={handleChange}/>
               {errors.direccion && (<p>{errors.direccion}</p>)}
           </div>
           


              <div>

  
              </div>
            </div>

            <div>
              <button className="ghost-round full-width" type="submit">
                {" "}
                Registrarse{" "}
              </button>

            <div className="botoncitoGoogle">
            <GoogleLogin
 
            clientId={clientID}
            onSuccess={onSuccess} //si le cambio a onfailure puedo ver la data guardada
            onFailure={onFailure}
            buttonText="Registrate con Google"
            cookiePolicy={"single_host_origin"}
            />

            </div>



            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
