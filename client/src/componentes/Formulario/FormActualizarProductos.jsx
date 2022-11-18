import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./FormMascota.css";
import {
  detalleProducto,
  adminEditarProducto,
} from "../../redux/actions/index";
import { Link } from "react-router-dom";

export default function EditarProducto(props) {
  const productoId = useSelector((state) => state.productoDetalle);

  const [producto, setProducto] = useState(productoId);

  const productId = props.match.params.id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detalleProducto(productId));
  }, [dispatch]);

  useEffect(() => {
    setProducto(productoId);
  }, [productoId]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(adminEditarProducto(productId, producto));
  };

  const handleChangeInput = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Editar Producto</h1>
      <form>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            value={producto.nombre || ""}
            name="nombre"
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
        </div>
        <div>
          <label>Descripcion: </label>
          <input
            type="text"
            value={producto.descripcion || ""}
            name="descripcion"
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
        </div>
        <div>
          <label>Imagen: </label>
          <input
            value={producto.imagen || ""}
            name="imagen"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Stock: </label>
          <input
            value={producto.stock || ""}
            name="stock"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Calificacion: </label>
          <input
            value={producto.calificacion || ""}
            name="calificacion"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Precio: </label>
          <input
            value={producto.precio || ""}
            name="precio"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Tipo: </label>
          <input
            value={producto.tipo || ""}
            name="tipo"
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
