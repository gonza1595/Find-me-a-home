import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  adminEditarUsuario,
  traerUsuariosPorId,
} from "../../../redux/actions/index";

export default function EditarUsuario(props) {
  const usuarioId = useSelector((state) => state.usuarioId);

  const [user, setUser] = useState(usuarioId);
  const userId = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(traerUsuariosPorId(userId));
  }, [dispatch]);

  useEffect(() => {
    setUser(usuarioId);
  }, [usuarioId]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(adminEditarUsuario(userId, user));
  };

  const handleChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Editar Usuario</h1>
      <form>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            value={user.nombre || ""}
            name="nombre"
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
        </div>
        <div>
          <label>Contraseña: </label>
          <input
            type="text"
            value={user.contraseña || ""}
            name="contraseña"
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
        </div>
        <div>
          <label>Correo: </label>
          <input
            value={user.correo || ""}
            name="correo"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Edad: </label>
          <input
            value={user.edad || ""}
            name="edad"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Direccion: </label>
          <input
            value={user.direccion || ""}
            name="direccion"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Rango: </label>
          <input
            value={user.rango || ""}
            name="rango"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <Link to="/requisitos">
          <button>Atras</button>
        </Link>
        <div>
          <button onClick={(e) => handleClick(e)}>Editar</button>
        </div>
      </form>
      ;
    </div>
  );
}
