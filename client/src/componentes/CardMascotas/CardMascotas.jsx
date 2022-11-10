import React from 'react'
import './CardMascotas.css';
import img from '../../assets/img/img1.png'

export default function CardMascotas(props) {
    return (
        <div className='card'>
            <div className='descripcion'>
               <img src={props.imagen? props.imagen : img} alt = "img" width = "150px"/>
               <h2>Nombre{props.nombre}</h2>
               <div className="p">
               <p>Edad: {props.edad}</p>
               <p>Sexo: {props.sexo}</p>
               </div>
            </div>
        </div>
        
    )
}
