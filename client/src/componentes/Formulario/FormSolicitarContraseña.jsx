import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { solicitarContraseña } from "../../redux/actions";



export default function FormSolicitudContraseña () {
    const dispatch= useDispatch();
    const history= useHistory();
    const [correo, setCorreo] = useState("");

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
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}></input>
            <button>Solicitar Contraseña</button>
        </form>
    )
}