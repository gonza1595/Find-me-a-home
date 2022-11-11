import React from "react";
import { useState } from "react";
import "./NavBar.css";
//import SearchBar from "../SearchBar/SearchBar";

function NavBar() {
  const [clicked, setClicked] = useState(false); //false

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };

  return (
    <nav className="headerNavBar">
      <ul className="navega">
        <h2 className="titleNavBar">Find me a HOME</h2>
        <li>
          <a className="title_textNavBar" onClick={handleClick} href="/">
            Inicio
          </a>
        </li>
        <li>
          <a
            className="title_textNavBar"
            onClick={handleClick}
            href="/QuienesSomos?"
          >
            Quienes somos
          </a>
        </li>
        <li>
          <a
            className="title_textNavBar"
            onClick={handleClick}
            href="/Productos"
          >
            Productos
          </a>
        </li>
        <li>
          <a
            className="title_textNavBar"
            onClick={handleClick}
            href="/Mascotas"
          >
            Adopta!
          </a>
        </li>
        <li>
          <a
            className="title_textNavBar"
            onClick={handleClick}
            href="/InciarSesion"
          >
            Iniciar sesion
          </a>
        </li>
        <li>
          <a
            className="title_textNavBar"
            onClick={handleClick}
            href="/requisitos"
          >
            Requisitos adopción
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
