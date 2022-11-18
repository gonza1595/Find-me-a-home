import React, { useEffect } from "react";
import "./ListaProductos.css";
import { useDispatch, useSelector } from "react-redux";
import { traerProductos } from "../../../redux/actions/index";
import { adminBorrarProducto } from "../../../redux/actions/index";
import { Link } from "react-router-dom";
import SideBar from "../Dashboard/SideBar/SideBar";
import SearchBarProducto from "../../SearchBar/SearchBarProducto";

const TablaProductos = () => {
  const productos = useSelector((state) => state.productos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(traerProductos());
  }, []);

  const handleDelete = (id) => {
    dispatch(adminBorrarProducto(id));
  };

  return (
    <div className="container_tabla_dash">
      <h2>PRODUCTOS</h2>
      <div className="searchYbtn">
        <div className="searchBarDashboard">
          <SearchBarProducto />
        </div>
        <Link to={"/dashboard/formProducto"}>
          <button className="btn-agregar-dash">Agregar Producto</button>
        </Link>
      </div>
      <table className="tabla-productos">
        <thead>
          <tr className="tabla-head">
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col">Descripción</th>
            <th scope="col">Imagen</th>
            <th scope="col">Borrar</th>
            <th scope="col">Editar</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((e) => {
            return (
              <tr className="tabla-body">
                <td>{e.nombre}</td>
                <td>{e.tipo}</td>
                <td>{e.precio}</td>
                <td>{e.stock}</td>
                <td>{e.descripcion}</td>
                <td className="imagentablaprod">{e.imagen}</td>
                <td className="borrartablamascota">
                  <button onClick={() => handleDelete(e.id)}>Borrar</button>
                </td>
                <td className="actualizartablamascota">
                  <Link to={`/dashboard/formActualizarProducto/${e.id}`}>
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

export default TablaProductos;
