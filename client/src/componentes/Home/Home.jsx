import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import img from "../../assets/img/img1.png";
import { Link } from "react-router-dom";

import Footer from "../Footer/Footer.jsx";

export default function home() {
  return (
    <div className="parent">
      <div className="div1">
        <NavBar />
      </div>

      <div className="div2"> La felicidad no se compra, se adopta. </div>
      <div className="div3">
        {" "}
        <img src={img} alt="img" width="200px" />
      </div>
      <div className="div4">
        <p>
          Antes de adoptar debés saber la gran responsabilidad que implica tener
          un animal en nuestro hogar. Por eso, te sugerimos que tengas en cuenta
          los siguientes aspectos.
        </p>

        <div className="subdiv4">
          <h2>TU TIEMPO</h2>
          <h2>TU ESPACIO</h2>
          <h2>TU PACIENCIA</h2>
          <h2>TU DINERO</h2>
          <h2>TU FAMILIA</h2>
        </div>
      </div>

      <div className="div5">
        <h1>Podés hacer mucho para ayudarnos</h1>

        <Link to={"/mascotas"}>
          <button>Conocé a nuestras mascotas</button>
        </Link>

        <Link>
          <button>Doná productos o dinero a nuestros refugios</button>
        </Link>
      </div>
      <div className="div-6-footer">
        <Footer />
      </div>
    </div>
  );
}
