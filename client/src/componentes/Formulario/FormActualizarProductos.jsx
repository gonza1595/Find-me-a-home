import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./FormMascota.css";
import {
  detalleProducto,
  adminEditarProducto,
} from "../../redux/actions/index";
import { Link } from "react-router-dom";
import Dark from "../NavBar/Dark";

export default function EditarProducto(props) {
  const productoId = useSelector((state) => state.productoDetalle);
  const history = useHistory();

  const [producto, setProducto] = useState(productoId);

  const productId = props.match.params.id;
  const modo = localStorage.getItem('modo');

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
    alert("Producto editado correctamente");
    history.push("/dashboard/productos");
  };

  const handleChangeInput = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`createFormMascota ${modo}`}>
      <div className="darkMode">
          <Dark />
        </div>
      <h1 className="tituloUsuario">Editar Producto</h1>
      <form>
        <div>
          <label className="labelUsuario">Nombre: </label>
          <input
            type="text"
            value={producto.nombre || ""}
            name="nombre"
               className={`inputFormMascotas ${modo}`}
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
               className={`inputFormMascotas ${modo}`}
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
               className={`inputFormMascotas ${modo}`}
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
               className={`inputFormMascotas ${modo}`}
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
               className={`inputFormMascotas ${modo}`}
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
               className={`inputFormMascotas ${modo}`}
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
               className={`inputFormMascotas ${modo}`}
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label className="labelUsuario">Estado: </label>
          <input
            value={producto.estado || ""}
            name="estado"
               className={`inputFormMascotas ${modo}`}
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
            <button onClick={(e) => handleClick(e)}>Guardar cambios</button>
          </div>
        </div>
      </form>
    </div>
  );
}
