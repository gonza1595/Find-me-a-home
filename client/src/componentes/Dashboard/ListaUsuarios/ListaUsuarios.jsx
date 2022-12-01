import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  traerUsuarios,
  adminBorrarUsuarios,
} from "../../../redux/actions/index";
import Dark from "../../NavBar/Dark";
import "../ListaUsuarios/ListaUsuario.css";
import FiltroUsuarios from "./FiltrosUsuarios";

const TablaUsuarios = () => {
  const usuarios = useSelector((state) => state.usuarios);
  const dispatch = useDispatch();
  const modo = localStorage.getItem('modo');

  useEffect(() => {
    dispatch(traerUsuarios());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(adminBorrarUsuarios(id));
  };

  // filtros para los usuarios

  const [filterSelected, setFilterSelected] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <div className={`container_tabla_dash ${modo}`}>
        <div className="darkMode">
          <Dark />
        </div>
      <h2>USUARIOS</h2>
      <div className={`filters ${modo}`}>
      <FiltroUsuarios setPage={setPage} setFilterSelected={setFilterSelected} />
      </div>
      <table className={`tabla-productos ${modo}`}>
        <thead className="theadMasctotas">
          <tr className="nombres-columnasUsuario">
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Direccion</th>
            <th scope="col">Rango</th>
            <th scope="col">Borrar</th>
            <th scope="col">Editar</th>
          </tr>
        </thead>

        <tbody className="tbodyUsuario ">
          {usuarios.map((usuario) => {
            return (
              <tr className="tabla-body">
                <td className="nombretablusuario">{usuario.nombre}</td>
                <td className="correotablusuario">{usuario.correo}</td>
                <td className="edadtablausuario">{usuario.edad}</td>
                <td className="direcciontablusuario">{usuario.direccion}</td>
                <td className="rangotablusuario">{usuario.rango}</td>

                <td className="borrartablausuario">
                  <button onClick={() => handleDelete(usuario.id)}>
                    Borrar
                  </button>
                </td>

                <td className="actualizartablausuario">
                  <Link to={`/dashboard/editarUsuario/${usuario.id}`}>
                    <button>Editar</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuarios;
