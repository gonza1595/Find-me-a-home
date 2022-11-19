import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  traerUsuarios,
  adminBorrarUsuarios,
} from "../../../redux/actions/index";
import "../ListaUsuarios/ListaUsuario.css";

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
    <div className="container_tabla_dash">
      <h2>USUARIOS</h2>
      <table className="tabla-usuarios">
        <thead className="theadMasctotas">
          <tr className="nombres-columnasUsuario">
            <th scope="col">Nombre</th>
            <th scope="col">Contraseña</th>
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
                <td className="contraseñatablausuario">{usuario.contraseña}</td>
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
