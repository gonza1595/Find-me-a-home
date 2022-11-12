import React from "react";
import "./CardProductos.css";
import img from "../../assets/img/img1.png";

export default function CardProductos({ imagen, precio, nombre }) {
  return (
    <div className="cardProductos">
      <div className="descripcion">
        <div className="image">
          <img
            src={imagen ? imagen : img}
            alt="img"
            width="150px"
            height={"200px"}
          />
        </div>
        <h2>{nombre}</h2>
        <p>Precio: ${precio}</p>
        
      </div>
    </div>
  );
}
