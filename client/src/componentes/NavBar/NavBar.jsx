import React from "react";
import { useState } from "react";
import "./NavBar.css"
import SearchBar from "../SearchBar/SearchBar";


function NavBar () {
    const [clicked, setClicked] = useState() //false

console.log(clicked)

    const handleClick = () => {
        //cuando esta true lo pasa a false y vice versa
        setClicked(!clicked)
      }

    return(
        <nav className="header">
            <ul  className="navega">
            <h2  className="title">Find me a HOME</h2>    
            <li><a className="title_text" onClick={handleClick} href ="/" >Inicio</a ></li>   
            <li><a className="title_text" onClick={handleClick} href ="/" >Quienes somos</a ></li>
            <li><a className="title_text" onClick={handleClick} href ="/" >Productos</a ></li>
            <li><a className="title_text" onClick={handleClick} href ="/" >Adopta!</a ></li>
            <li><a className="title_text" onClick={handleClick} href ="/" >Iniciar sesion</a ></li>
            <li><a className="title_text" onClick={handleClick} href="/">Noticias</a></li>
            <SearchBar/>
            </ul>
          
 </nav>
 

    )
}

export default NavBar
/*
 className={`links ${clicked ? 'active' : ''}`}

 
  */