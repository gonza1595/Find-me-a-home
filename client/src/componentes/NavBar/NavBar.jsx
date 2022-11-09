import React from "react";
import { useState } from "react";
import "./NavBar.css"
<<<<<<< HEAD
import SearchBar from "../SearchBar/SearchBar";


function NavBar () {
    const [clicked, setClicked] = useState() //false
=======
//import SearchBar from "../SearchBar/SearchBar";


function NavBar () {
    const [clicked, setClicked] = useState(false) //false
>>>>>>> dcd72fbcf601645629d88f94216ce01b70843838

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
<<<<<<< HEAD
            <li><a className="title_text" onClick={handleClick} href ="/" >Quienes somos</a ></li>
            <li><a className="title_text" onClick={handleClick} href ="/" >Productos</a ></li>
            <li><a className="title_text" onClick={handleClick} href ="/" >Adopta!</a ></li>
            <li><a className="title_text" onClick={handleClick} href ="/" >Iniciar sesion</a ></li>
            <li><a className="title_text" onClick={handleClick} href="/">Noticias</a></li>
            <SearchBar/>
            </ul>
          
=======
            <li><a className="title_text" onClick={handleClick} href ="/QuienesSomos?" >Quienes somos</a ></li>
            <li><a className="title_text" onClick={handleClick} href ="/Productos" >Productos</a ></li>
            <li><a className="title_text" onClick={handleClick} href ="/Adopta" >Adopta!</a ></li>
            <li><a className="title_text" onClick={handleClick} href ="/InciarSesion" >Iniciar sesion</a ></li>
            <li><a className="title_text" onClick={handleClick} href="/Noticias">Noticias</a></li>
           {/* <SearchBar/>*/}
            </ul>          
>>>>>>> dcd72fbcf601645629d88f94216ce01b70843838
 </nav>
 

    )
}

export default NavBar
<<<<<<< HEAD
/*
 className={`links ${clicked ? 'active' : ''}`}

 
  */
=======
>>>>>>> dcd72fbcf601645629d88f94216ce01b70843838
