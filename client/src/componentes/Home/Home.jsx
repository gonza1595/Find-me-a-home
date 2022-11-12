import React from "react";
import "./Home.css";
import img from "../Home/imgHome.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

export default function home() {
  return (
    <div className="parent">

      <div className="div2_h"> La felicidad no se compra, se adopta. 
        <img src={img} alt="img" width="350px" />
      </div>
      <div className="div4_h">
        <p>
          Antes de adoptar debés saber la gran responsabilidad que implica tener
          un animal en nuestro hogar. Por eso, te sugerimos que tengas en cuenta
          los siguientes aspectos.
        </p>

        <div className="subdiv4_h">
          <h2> TIEMPO</h2>
          <h2> ESPACIO</h2>
          <h2> PACIENCIA</h2>
          <h2> DINERO</h2>
          <h2> FAMILIA</h2>
        </div>
      </div>

      <div className="div5_h">
        <h1>Podés hacer mucho para ayudarnos</h1>
        <div className="botones_home">

        <Link to={"/mascotas"}>
          <button>Conocé a nuestras mascotas</button>
        </Link>

        <Link>
          <button>Doná productos o dinero a nuestros refugios</button>
        </Link>
        </div>

      </div>
      <div className="div6_footer">
        <Footer />
      </div>
    </div>
  );
}
