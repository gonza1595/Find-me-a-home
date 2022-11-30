import React from "react";
import "./DetalleRefugio.css";
import perrito from "./perrito.png"

export default function DetalleRefugio() {

  const modo = localStorage.getItem('modo');

  return (
    <div className={`containerRef ${modo}`}>
      <a href="javascript:history.back()">
        <button className="home_button">Volver</button>
      </a>

     <div className={`datosDetalleRefugio ${modo}`}>

        <div className="titleDetalleRefugio">
           <h3>Gracias por su interes! para ayudarnos puedes colaborar <br></br> comprando nuestros productos o
             donando dinero a nuestros refugios</h3>            
          
        </div>  
        <img src={perrito} width="55%" alt= "contacto not found"/>
      </div>
           <div className="botonesDeContacto">
      <a href="productos">
        <button className="home_button_detalle">Conoce nuestros productos! 🐾</button>
      </a>
      <a href="donaciones">
        <button className="home_button_detalle">Donaciones 🐾</button>
      </a>
       
        </div>

      </div>
  );
}
