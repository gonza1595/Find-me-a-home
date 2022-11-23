import React from "react";
import { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import carrito from "../Carrito/carritoimg.png"

function NavBar() {
  const [clicked, setClicked] = useState(false); //false

  const [cartQuantity, setcartQuantity] = useState(0);
  const numberCart = useSelector((state) => state.numberCart);
  const cart = useSelector((state) => state.cart);

////carrito
const calculateCartQuantity = () => {
  let counter = 0;
  cart.forEach((item) => {
    counter += item.quantity;
  });
  setcartQuantity(counter);
};

useEffect(() => {
  calculateCartQuantity();
}, [numberCart]);


///

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };

  return (
    <nav className="headerNavBar">
        <h2 className="titleNavBar">Find me a HOME</h2>
      <ul className="navega">
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
            href="/productos"
          >
            Productos
          </a>
        </li>
        <li>
          <a
            className="title_textNavBar"
            onClick={handleClick}
            href="/mascotas"
          >
            Adopta!
          </a>
        </li>

        <Link to="/iniciarSesion">
         
        <button >Iniciar Sesion</button>
        
        </Link>
        <li>
          <a
            className="title_textNavBar"
            onClick={handleClick}
            href="/requisitos"
          >
            Requisitos adopción
          </a>
        </li>
        <li >
          <Link to="/carrito" >
        <img src={carrito} alt="carrito" width="25px" /> {cartQuantity}
        </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
