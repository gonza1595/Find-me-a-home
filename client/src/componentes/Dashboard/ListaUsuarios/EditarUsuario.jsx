import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  adminEditarUsuario,
  traerUsuariosPorId,
} from "../../../redux/actions/index";
import "./EditarUsuario.css";
import Dark from "../../NavBar/Dark";

export default function EditarUsuario(props) {
  const usuarioId = useSelector((state) => state.usuarioId);
  const history = useHistory();
  const [user, setUser] = useState(usuarioId);
  const userId = props.match.params.id;
  const dispatch = useDispatch();
  const modo = localStorage.getItem('modo');

  useEffect(() => {
    dispatch(traerUsuariosPorId(userId));
  }, [dispatch]);

  useEffect(() => {
    setUser(usuarioId);
  }, [usuarioId]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(adminEditarUsuario(userId, user));
    alert("Usuario editado correctamente");
    history.push("/dashboard/usuarios");
  };

  const handleChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className={`createFormMascota ${modo}`}>
      	<div className="darkMode">
          <Dark />
        </div>
        <h1 className="tituloUsuario">Editar Usuario</h1>
        <form>
          <div>
            <label className="labelUsuario">Nombre: </label>
            <input
              type="text"
              value={user.nombre || ""}
              name="nombre"
              className="inputUsuario"
              onChange={(e) => {
                handleChangeInput(e);
              }}
            />
          </div>
          <div>
            <label className="labelUsuario">Correo: </label>
            <input
              value={user.correo || ""}
              name="correo"
              className="inputUsuario"
              onChange={(e) => {
                handleChangeInput(e);
              }}
              type="text"
            />
          </div>
          <div>
            <label className="labelUsuario">Edad: </label>
            <input
              value={user.edad || ""}
              name="edad"
              className="inputUsuario"
              onChange={(e) => {
                handleChangeInput(e);
              }}
              type="text"
            />
          </div>
          <div>
            <label className="labelUsuario">Direccion: </label>
            <input
              value={user.direccion || ""}
              name="direccion"
              className="inputUsuario"
              onChange={(e) => {
                handleChangeInput(e);
              }}
              type="text"
            />
          </div>
          <div>
            <label className="labelUsuario">Rango: </label>
            <input
              value={user.rango || ""}
              name="rango"
              className="inputUsuario"
              onChange={(e) => {
                handleChangeInput(e);
              }}
              type="text"
            />
          </div>
          <div className="buttonUsuario">
            <div className="buttonAtras">
              <Link to="/dashboard/usuarios">
                <button>Atras</button>
              </Link>
            </div>
            <div className="buttonEditar">
              <button onClick={(e) => handleClick(e)}>Guardar cambios</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
