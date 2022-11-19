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
    <div className="createFormMascota">
      <h1 className="tituloUsuario">Editar Producto</h1>
      <form>
        <div>
          <label className="labelUsuario">Nombre: </label>
          <input
            type="text"
            value={producto.nombre || ""}
            name="nombre"
            className="inputUsuario"
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
        </div>
        <div>
          <label className="labelUsuario">Descripcion: </label>
          <input
            type="text"
            value={producto.descripcion || ""}
            name="descripcion"
            className="inputUsuario"
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
        </div>
        <div>
          <label className="labelUsuario">Imagen: </label>
          <input
            value={producto.imagen || ""}
            name="imagen"
            className="inputUsuario"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label className="labelUsuario">Stock: </label>
          <input
            value={producto.stock || ""}
            name="stock"
            className="inputUsuario"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label className="labelUsuario">Calificacion: </label>
          <input
            value={producto.calificacion || ""}
            name="calificacion"
            className="inputUsuario"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label className="labelUsuario">Precio: </label>
          <input
            value={producto.precio || ""}
            name="precio"
            className="inputUsuario"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label className="labelUsuario">Tipo: </label>
          <input
            value={producto.tipo || ""}
            name="tipo"
            className="inputUsuario"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div className="buttonUsuario">
          <div className="buttonAtras">
            <Link to="/dashboard/productos">
              <button>Atras</button>
            </Link>
          </div>
          <div className="buttonEditar">
            <button onClick={(e) => handleClick(e)}>Editar</button>
          </div>
        </div>
      </form>
      ;
    </div>
  );
}
