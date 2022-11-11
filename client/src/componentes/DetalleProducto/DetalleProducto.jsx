import React, { useEffect } from "react";
import "./DetalleProducto.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {
  detalleProducto,
  limpiarEstadoDetalle,
} from "../../redux/actions/index";
import axios from "axios";

const DetalleProducto = () => {
  //   const producto = useSelector((state) => state.detalle);
  const { id } = useParams();
  const [producto, setProducto] = React.useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detalleProducto(id));
    return () => {
      dispatch(limpiarEstadoDetalle());
    };
  }, []);

  const getProduct = useEffect(() => {
    try {
      fetch(`http://localhost:3001/productos/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setProducto(data);
        });
    } catch (e) {
      console.log(e);
    }
  }, [id]);
  return (
    <>
      <NavBar />

      <div className="container">
        {!producto ? (
          <p>Loader</p>
        ) : (
          <div>
            <a href="javascript:history.back()">
              <button className="home_button">Volver</button>
            </a>
            <div className="informacionDetalleProducto">
              <div className="nombreimg">
                <h2 id="nombre">{producto.nombre}</h2>
                <img
                  src={producto.imagen}
                  alt="img not found"
                  width="250px"
                  height="auto"
                />
              </div>
              <ul>
                <li>Precio: {producto.precio}</li>
                <li>Calificación: {producto.calificacion}</li>
                <li>Stock: {producto.stock}</li>
                <li>Tipo: {producto.tipo}</li>
              </ul>
              <div className="descripDetalleProducto">
                <h4>Descripción:</h4>
                <p>{producto.descripcion}</p>
              </div>
              <NavLink to="/comprar" className="link">
                <button className="adopta">Comprar</button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetalleProducto;
