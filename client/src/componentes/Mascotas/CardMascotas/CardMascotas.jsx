import React from "react";
import "./CardMascotas.css";

export default function CardMascotas({ imagen, nombre, edad, sexo }) {
  return (
    <div className="container">
      <div className="image">
        <img src={imagen} alt="flag"></img>
      </div>
      <div>
        <h4>{nombre.toUpperCase()}</h4>
      </div>
      <div>
        <h4>Edad: {edad}</h4>
      </div>
      <div>
        <h4>Sexo: {sexo.charAt(0).toUpperCase() + sexo.substring(1)}</h4>
      </div>
    </div>
  );
}
