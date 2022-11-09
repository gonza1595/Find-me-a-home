import React from 'react'
import './DetalleRefugio.css'
import NavBar from '../NavBar/NavBar'
import wsp from './iconWsp.png'
import insta from './iconInsta.png'


export default function DetalleRefugio() {

  return (
    <div className='container'>
        <NavBar/>
        <a href="javascript:history.back()">
        <button className="home_button">Volver</button>
        </a>
        <div className='datos'>
        <div className='title'>
        <h3>CONTACTATE CON EL REFUGIO:</h3>
        <h1>Nombre del refugio</h1>
        </div>
        <div className="lista">
        <ul>
            <li>Correo: </li>
            <li>Teléfono: </li>
            <li>Instagram: </li>
            <li>Persona encargada: </li>
            <li>Lugar: </li>
        </ul>
        </div>
        <div className='botoncitos'>
        <a href="https://wa.me/3704718841?text=Hola!%20Me%20interesa%20adoptar%20una%20mascota%20de%20tu%20refugio!">
            <button className='btn_wsp'>
                <img src={wsp} width="25px" alt="" />
            </button>
            </a>
        
            <a href="https://www.instagram.com/rosarioanimal/">
            <button className='btn_wsp'>
                <img src={insta} width="27px" alt="" />
            </button>
            </a>
        </div>

        </div>
    </div>
  )
}
