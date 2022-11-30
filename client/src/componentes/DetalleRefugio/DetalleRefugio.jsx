import React from "react";
import "./DetalleRefugio.css";
import wsp from "./iconWsp.png";
import insta from "./iconInsta.png";

export default function DetalleRefugio() {

  const modo = localStorage.getItem('modo');

  return (
    <div className={`containerRef ${modo}`}>
      <a href="javascript:history.back()">
        <button className="home_button">Volver</button>
      </a>

     <div className={`datosDetalleRefugio ${modo}`}>
        <div className="titleDetalleRefugio">
           <h3>Gracias por su interes! para ayudarnos puedes colaborar comprando nuestros productos o donando dinero a nuestros refugios</h3>      
           <a href="productos">
        <button className="home_button_detalle">Conoce nuestros productos! 🐾</button>
      </a>
      <a href="pagos">
        <button className="home_button_detalle">Donaciones 🐾</button>
      </a>
       
        </div>
      </div>
    </div>
  );
}
