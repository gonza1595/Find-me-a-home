import React from "react";
import "./DetalleRefugio.css";
import wsp from "./iconWsp.png";
import insta from "./iconInsta.png";

export default function DetalleRefugio() {
  return (
    <div className="container">
      <a href="javascript:history.back()">
        <button className="home_button">Volver</button>
      </a>

     <div className="datosDetalleRefugio">
        <div className="titleDetalleRefugio">
           <h3>Gracias por su interes! para ayudarnos puedes colaborar comprando nuestros productos o donando dinero a nuestros refugios</h3>      
           <a href="productos">
        <button className="home_button_detalle">Conoce nuestros productos! 🐾</button>
      </a>
      <a href="pagos">
        <button className="home_button_detalle">Donaciones 🐾</button>
      </a>
       
        </div>
        <div className="listaDetalleRefugio">
          <ul>
        
          </ul>
        </div>
        <div className="botoncitosDetalleRefugio">
        

        
        </div>
      </div>
    </div>
  );
}
