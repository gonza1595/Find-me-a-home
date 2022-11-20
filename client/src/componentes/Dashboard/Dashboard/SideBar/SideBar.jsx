import React, { useEffect, useState } from 'react'
import '../SideBar/SideBar.css'
import admin from '../img/admin.png'
import home from '../img/home.png'
import producto from '../img/productos.png'
import mascota from '../img/mascotas.png'
import user from '../img/user.png'
import refugio from '../img/refugio.png'

export default function SideBar() {
  

  return (
    <div className="sideBar_dash">
        <nav>
            {/* <div className="button_sidebar">
                <label htmlFor="check" className="menuButton">
                <input id="check" type="checkbox"/>
                    <span className="top"></span>
                    <span className="mid"></span>
                    <span className="bot"></span>
                </label>
            </div> */}

            <div className="user-profile">
                <img src={admin} alt="admin-picture" width='80px'/>
                <h3>Admin name</h3>                
            </div>

            <ul className="side-nav">
                <li className="side-nav_home">
                    <a href="/dashboard">
                    <img src={home} width='25px'/>
                        <span>Home</span>
                    </a>
                </li>
                <li className="side-nav_product">
                    <a href='/dashboard/productos'>
                    <img src={producto} width='25px'/>
                        <span>Productos</span>
                    </a>
                </li>
                <li className="side-nav_masc">
                    <a href="/dashboard/mascotas">
                    <img src={mascota} width='30px'/>
                        <span>Mascotas</span>
                    </a>
                </li>
                <li className="side-nav_users">
                    <a href="/dashboard/usuarios">
                    <img src={user} width='25px'/>
                        <span>Usuarios</span>
                    </a>
                </li>
                {/* <li className="side-nav_refug">
                    <a href="/dashboard/refugios">
                    <img src={refugio} width='25px'/>
                        <span>Refugios</span>
                    </a>
                </li> */}
            </ul>
        </nav>
    </div>

)
}
