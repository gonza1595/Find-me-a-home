import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./FormMascota.css";
import {
  detalleMascota,
  adminActualizarMascota,
} from "../../redux/actions/index";
import { Link } from "react-router-dom";
import Dark from "../NavBar/Dark";

export default function EditarMascota(props) {
  const mascotaId = useSelector((state) => state.detalle);
  const history = useHistory();
  const modo = localStorage.getItem('modo');

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
    alert("Mascota editada correctamente");
    history.push("/dashboard/mascotas");
  };

  const handleChangeInput = (e) => {
    setMascota({
      ...mascota,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`createFormMascota ${modo}`}>
      			<div className="darkMode">
          <Dark />
        </div>
      <h1 className="tituloUsuario">Editar Mascota</h1>
      <form>
        <div>
          <label className="labelUsuario">Nombre: </label>
          <input
            type="text"
            value={mascota.nombre || ""}
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
            value={mascota.descripcion || ""}
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
            value={mascota.imagen || ""}
            name="imagen"
            className="inputUsuario"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label className="labelUsuario">Edad: </label>
          <input
            value={mascota.edad || ""}
            name="edad"
            className="inputUsuario"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label className="labelUsuario">Tamaño: </label>
          <input
            value={mascota.tamaño || ""}
            name="tamaño"
            className="inputUsuario"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label className="labelUsuario">Raza: </label>
          <input
            value={mascota.raza || ""}
            name="raza"
            className="inputUsuario"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label className="labelUsuario">Sexo: </label>
          <input
            value={mascota.sexo || ""}
            name="sexo"
            className="inputUsuario"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label className="labelUsuario">Especie: </label>
          <input
            value={mascota.especie || ""}
            name="especie"
            className="inputUsuario"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <label className="labelUsuario">Estado: </label>
          <input
            value={mascota.estado || ""}
            name="estado"
            className="inputUsuario"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            type="text"
          />
        </div>
        <div className="buttonUsuario">
          <div className="buttonAtras">
            <Link to="/dashboard/mascotas">
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
