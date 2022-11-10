import React, { useEffect } from 'react';
import './DetalleProducto.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import  NavBar  from '../NavBar/NavBar'
import { detalleProducto, limpiarEstadoDetalle } from '../../redux/actions/index';

const DetalleProducto = () => {

    const producto = useSelector((state)=>state.detalle)
    const { id } = useParams()

    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(detalleProducto(id))
        return()=>{
          dispatch(limpiarEstadoDetalle())
        }
    }, [])

    return (
        <div className="container">

            {!producto  ?  <p>Loader</p> :
            <div>
                <NavBar />
                <a href="javascript:history.back()">
                <button className="home_button">Volver</button>
                </a>
                <div className='informacion'>
                    <div className="nombreimg">
                        <h2 id='nombre'>{producto.nombre}</h2>
                        <img  src={producto.imagen} alt= "img not found" width = "250px" height= "auto"/>
                    </div>
                        <ul>
                            <li>Precio: {producto.precio}</li>
                            <li>Calificación: {producto.calificacion}</li>
                            <li>Stock: {producto.stock}</li>
                            <li>Tipo: {producto.tipo}</li>
                        </ul>
                        <div className="descrip">
                        <h4 >Descripción:</h4>
                        <p>{producto.descripcion}</p>

                        </div>
                        <NavLink to='/comprar' className='link' >
                            <button className='adopta'>Comprar</button>
                        </NavLink>    
                    </div>
                </div>
            }               
        </div>
    )            
}

export default DetalleProducto
