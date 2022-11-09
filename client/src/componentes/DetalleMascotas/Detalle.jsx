import React, { useEffect } from 'react';
import './Detalle.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import {  detalleMascota } from '../../redux/actions/mascotasActions';
// import { traerMascotas } from '../../redux/slices/mascotasSlice';
import  NavBar  from '../NavBar/NavBar'

const mascotas = require('../../mascotas.json');
//console.log(mascotas.mascotas)

export default function Detalle() {



    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(detalleMascota(params.id))
    }, [dispatch, params.id])

   const  detalle  = useSelector(state=> state.detalle)

 
    return (
        <div className="container">

            {!mascotas.mascotas.length > 0 ?  <p>Loader</p> :
            <div>
                <NavBar />
                <a href="javascript:history.back()">
                <button className="home_button">Volver</button>
                </a>
                <div className='informacion'>
                    <div className="nombreimg">
                        <h2 id='nombre'>{mascotas.mascotas[params.id].nombre.toUpperCase()}</h2>
                        <img  src={mascotas.mascotas[params.id].imagen} alt= "img not found" width = "250px" height= "auto"/>
                    </div>
                        <ul>
                            <li>Edad: {mascotas.mascotas[params.id].edad}</li>
                            <li>Sexo: {mascotas.mascotas[params.id].sexo}</li>
                            <li>Raza: {mascotas.mascotas[params.id].raza}</li>
                            <li>Tamaño: {mascotas.mascotas[params.id].tamaño}</li>
                        </ul>
                        <div className="descrip">
                        <h4 >Descripción:</h4>
                        <p>{mascotas.mascotas[params.id].descripcion}</p>

                        </div>
                        <NavLink to='/adopta' className='link' >
                    <button className='adopta'>Adopta</button>
                </NavLink>
                        
                    </div>
            </div>
}

                        
        </div>
    )
    
}


