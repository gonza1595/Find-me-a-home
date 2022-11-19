import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./FormMascota.css";
import {
  detalleMascota,
  adminActualizarMascota,
} from "../../redux/actions/index";
import { Link } from "react-router-dom";

export default function EditarMascota(props) {
  const mascotaId = useSelector((state) => state.detalle);

  const [mascota, setMascota] = useState(mascotaId);

  const petId = props.match.params.id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detalleMascota(petId));
  }, [dispatch]);

  useEffect(() => {
    setMascota(mascotaId);
  }, [mascotaId]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(adminActualizarMascota(petId, mascota));
  };

  const handleChangeInput = (e) => {
    setMascota({
      ...mascota,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Editar Mascota</h1>
      <form>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            value={mascota.nombre || ""}
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
            value={mascota.descripcion || ""}
            name="descripcion"
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
        </div>
        <div>
          <label>Imagen: </label>
          <input
            value={mascota.imagen || ""}
            name="imagen"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Edad: </label>
          <input
            value={mascota.edad || ""}
            name="edad"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Tamaño: </label>
          <input
            value={mascota.tamaño || ""}
            name="tamaño"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Raza: </label>
          <input
            value={mascota.raza || ""}
            name="raza"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Sexo: </label>
          <input
            value={mascota.sexo || ""}
            name="sexo"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Especie: </label>
          <input
            value={mascota.especie || ""}
            name="especie"
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