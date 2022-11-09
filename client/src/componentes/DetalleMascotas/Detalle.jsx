import React, { useEffect } from 'react';
import './Detalle.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import  NavBar  from '../NavBar/NavBar'
// import { detalleMascota, limpiarEstadoDetalle } from '../../redux/actions/index';

const json = require('../../mascotas.json');
const mascotas =json.mascotas;

export default function Detalle() {

    // const dispatch = useDispatch();
    // const params = useParams();
    // const mascotas  = useSelector(state=> state.detalle)

    // useEffect(() => {
    //     dispatch(detalleMascota(params.id))
    //     return () => {
    //         dispatch(limpiarEstadoDetalle())
    //     }
    // }, [dispatch, params.id])

 
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
                        <h2 id='nombre'>{mascotas[0].nombre.toUpperCase()}</h2>
                        <img  src={mascotas[0].imagen} alt= "img not found" width = "250px" height= "auto"/>
                    </div>
                        <ul>
                            <li>Edad: {mascotas[0].edad}</li>
                            <li>Sexo: {mascotas[0].sexo}</li>
                            <li>Raza: {mascotas[0].raza}</li>
                            <li>Tamaño: {mascotas[0].tamaño}</li>
                        </ul>
                        <div className="descrip">
                        <h4 >Descripción:</h4>
                        <p>{mascotas[0].descripcion}</p>

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


