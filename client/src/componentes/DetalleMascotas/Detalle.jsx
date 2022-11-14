import React, { useEffect } from "react";
import "./Detalle.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  detalleMascota,
  limpiarEstadoDetalle,
} from "../../redux/actions/index";
import Loader from "../Loader/Loader";

export default function Detalle() {
  const dispatch = useDispatch();
  const params = useParams();
  const mascotas = useSelector((state) => state.detalle);

  useEffect(() => {
    dispatch(detalleMascota(params.id));
    return () => {
      dispatch(limpiarEstadoDetalle());
    };
  }, []);

  return (
    <div className="container">
      {!mascotas ? (
        <Loader />
      ) : (
        <div>
          <a href="javascript:history.back()">
            <button className="home_button">Volver</button>
          </a>
          <div className="informacionDetalleMascotas">
            <div className="nombreimg">
              <h2 id="nombre">{mascotas.nombre}</h2>
              <img
                src={mascotas.imagen}
                alt="img not found"
                width="250px"
                height="auto"
              />
            </div>
            <ul>
              <li>
                Edad:{" "}
                {mascotas.edad === 1
                  ? `${mascotas.edad} año`
                  : `${mascotas.edad} años`}
              </li>
              <li>Sexo: {mascotas.sexo}</li>
              <li>Raza: {mascotas.raza}</li>
              <li>Tamaño: {mascotas.tamaño}</li>
            </ul>
            <div className="descripDetalleMascota">
              <h4>Descripción:</h4>
              <p>{mascotas.descripcion}</p>
            </div>
            <NavLink to="/contacto" className="link">
              <button className="adopta">Adopta</button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
