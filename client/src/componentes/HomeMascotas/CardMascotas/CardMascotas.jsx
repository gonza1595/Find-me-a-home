import React from "react";
import "./CardMascotas.css";
import img from "../../../assets/img/img1.png";

export default function CardMascotas({ imagen, nombre, edad, sexo }) {
  return (
    <div className="card">
      <div className="descripcion">
        <img src={imagen ? imagen : img} alt="img" width="150px" />
        <h2>{nombre.toUpperCase()}</h2>
        <div className="p">
          <p>Edad: {edad === 1 ? `${edad} año` : `${edad} años`}</p>
          <p>Sexo: {sexo.charAt(0).toUpperCase() + sexo.substring(1)}</p>
        </div>
      </div>
    </div>
  );
}
