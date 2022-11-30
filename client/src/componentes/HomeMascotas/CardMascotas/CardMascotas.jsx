import React from "react";
import "./CardMascotas.css";
import img from "../../../assets/img/img1.png";

export default function CardMascotas({ imagen, nombre, edad, sexo }) {

  const modo = localStorage.getItem('modo');

  return (
    <div className={`cardMascotas ${modo}`}>
      <div>
        <img className="imageCard" src={imagen ? imagen : img} alt="img" />
        <h2>{nombre.toUpperCase()}</h2>
        <div className="pMascotas">
          <p>Edad: {edad === 1 ? `${edad} año` : `${edad} años`}</p>
          <p>Sexo: {sexo.charAt(0).toUpperCase() + sexo.substring(1)}</p>
        </div>
      </div>
    </div>
  );
}
