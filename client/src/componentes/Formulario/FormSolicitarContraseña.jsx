import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { solicitarContraseña } from "../../redux/actions";
import "./FormSolicitarContraseña.css"


export default function FormSolicitudContraseña () {
    const dispatch= useDispatch();
    const history= useHistory();
    const [correo, setCorreo] = useState("");
  const modo = localStorage.getItem('modo');


    const handleChange = (e) => {
      e.preventDefault();
      setCorreo(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(solicitarContraseña(correo));
      alert(`se a enviado una nueva contraseña a ${correo}`);
      history.push("/iniciarSesion");
    };

    return (
      <div className={`contras ${modo}`}>
      <div className={`solicitudContra ${modo}`}>
        <form onSubmit={handleSubmit}>
          <h3>¿Olvidaste tu contraseña? 
            Escribi tu mail y te enviaremos una nueva</h3>
            <input type="text" onChange={handleChange}></input>
            <button>Solicitar Contraseña</button>
        </form>
        </div>
        </div>
    )
}