import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { cambiarContraseña } from "../../redux/actions";


export default function FormCambioContraseña () {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [nuevaContraseña, setNuevaContraseña] = useState("");

    const correoChange = (e) => {
        e.preventDefault();
        setCorreo(e.target.value);
    };

    const contraseñaChange = (e) => {
        e.preventDefault();
        setContraseña(e.target.value);
    };

    const nuevaContraseñaChange =(e) => {
        e.preventDefault();
        setNuevaContraseña(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(cambiarContraseña(correo, contraseña, nuevaContraseña));
      alert("Tu contraseña se a modificado con éxito");
      history.push("/iniciarSesion");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="email"
            placeholder="Correo..."
            onChange={correoChange} ></input>
            <input 
            type="password"
            placeholder="Contraseña..."
            onChange={contraseñaChange}></input>
            <input 
            type="password"
            placeholder="Nueva Contraseña..."
            onChange={nuevaContraseñaChange}></input>
            <button type="submit">Cambiar Contraseña</button>
        </form>
    )

}