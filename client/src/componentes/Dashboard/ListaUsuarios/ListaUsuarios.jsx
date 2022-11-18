import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  traerUsuarios,
  adminBorrarUsuarios,
} from "../../../redux/actions/index";
import "../ListaUsuarios/ListaUsuario.css";
import SideBar from "../Dashboard/SideBar/SideBar";

const TablaUsuarios = () => {
  const usuarios = useSelector((state) => state.usuarios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(traerUsuarios());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(adminBorrarUsuarios(id));
  };

  return (
    <div className="conteinerTablaUsuario">
      <table className="tabla-usuarios">
        <thead>
          <tr className="nombres-columnas">
            <th scope="col">Nombre</th>
            <th scope="col">Contraseña</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Direccion</th>
            <th scope="col">Rango</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody className="tbodyUsuario ">
          {usuarios.map((usuario) => {
            return (
              <tr className="tabla-body">
                <td className="nombretablusuario">{usuario.nombre}</td>
                <td className="contraseñatablusuario">{usuario.contraseña}</td>
                <td className="correotablusuario">{usuario.correo}</td>
                <td className="edadtablausuario">{usuario.edad}</td>
                <td className="direcciontablusuario">{usuario.direccion}</td>
                <td className="rangotablusuario">{usuario.rango}</td>
                <td className="tdBotonesUsuarios">
                  <Link to={`/dashboard/editarUsuario/${usuario.id}`}>
                    <button>Editar</button>
                  </Link>
                  <button onClick={() => handleDelete(usuario.id)}>
                    Borrar
                  </button>
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
