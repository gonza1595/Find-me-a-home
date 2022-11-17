import React from 'react'
import '../ListaProductos/ListaProductos.css'
import SideBar from '../Dashboard/SideBar/SideBar'

export default function ListaUsuarios() {
  return (
<div className='container_tabla_dash'>

<div className="nameTabla">
  <h2>USUARIOS</h2>
</div>

<table className='tabla-productos'>
  <thead>
    <tr className='tabla-head'>
      <th scope="col">Nombre</th>
      <th scope="col">Correo</th>
      <th scope="col">Contraseña</th>
      <th scope="col">Edad</th>
      <th scope="col">Dirección</th>
      <th scope="col">Rango</th>
    </tr>
  </thead>

  <tbody>tabla</tbody>
</table>
</div>
  )
}
