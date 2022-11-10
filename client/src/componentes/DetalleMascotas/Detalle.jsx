import React, { useEffect } from 'react';
import './Detalle.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import  NavBar  from '../NavBar/NavBar'
import { detalleMascota, limpiarEstadoDetalle } from '../../redux/actions/index';

export default function Detalle() {

    const dispatch = useDispatch();
    const params = useParams();
    const mascotas  = useSelector(state=> state.detalle)

    useEffect(() => {
        dispatch(detalleMascota(params.id))
        return () => {
            dispatch(limpiarEstadoDetalle())
        }
    }, [])

 
    return (
        <div className="container">

            {!mascotas  ?  <p>Loader</p> :
            <div>
                <NavBar />
                <a href="javascript:history.back()">
                <button className="home_button">Volver</button>
                </a>
                <div className='informacion'>
                    <div className="nombreimg">
                        <h2 id='nombre'>{mascotas.nombre}</h2>
                        <img  src={mascotas.imagen} alt= "img not found" width = "250px" height= "auto"/>
                    </div>
                        <ul>
                            <li>Edad: {mascotas.edad}</li>
                            <li>Sexo: {mascotas.sexo}</li>
                            <li>Raza: {mascotas.raza}</li>
                            <li>Tamaño: {mascotas.tamaño}</li>
                        </ul>
                        <div className="descrip">
                        <h4 >Descripción:</h4>
                        <p>{mascotas.descripcion}</p>

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


