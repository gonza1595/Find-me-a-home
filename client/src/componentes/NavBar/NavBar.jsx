import React from "react";
import { useState } from "react";



function NavBar () {
    const [clicked, setClicked] = useState(false) //false

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
            <li><a className="title_text" onClick={handleClick} href ="/QuienesSomos?" >Quienes somos</a ></li>
            <li><a className="title_text" onClick={handleClick} href ="/Productos" >Productos</a ></li>
            <li><a className="title_text" onClick={handleClick} href ="/Mascotas" >Adopta!</a ></li>
            <li><a className="title_text" onClick={handleClick} href ="/InciarSesion" >Iniciar sesion</a ></li>
            <li><a className="title_text" onClick={handleClick} href="/Noticias">Noticias</a></li>
        
            </ul>          
 </nav>
    )
}

export default NavBar
