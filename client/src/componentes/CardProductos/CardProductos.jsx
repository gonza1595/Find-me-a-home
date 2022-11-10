import React from 'react'
import './CardProductos.css';
import img from '../../assets/img/img1.png'

export default function CardProductos(props) {
  return (
    <div className='card'>
    <div className='descripcion'>
       <img src={props.imagen? props.imagen : img} alt = "img" width = "150px"/>
       <h2>Nombre{props.nombre}</h2>
       <div className="p">
       <p>Precio: {props.precio}</p>
       </div>
    </div>
</div> 
  )
}
