import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBarProducto";
import "./HomeProductos.css"
import {traerProductos} from "../../redux/actions/index.js"
//importar paginado cuando este disponible
import CardProductos from "../CardProductos/CardProductos";

export default function HomeProductos (){

    const dispatch = useDispatch()

    
    const productos = useSelector((state)=>state.productos)

    useEffect(() => {
        dispatch(traerProductos());
      }, [dispatch]);

    return (


    <div className="homeContainer">

        <NavBar/>

        <div className="paginatedDiv">
    
  {/* paginado */}
    
        </div>

        <div className="containerCards">

{   productos.length>0?

    productos.map((el)=>{
        return (
            <div className="cards">

                <Link to = {"/productos/"+el.id}>

                <CardProductos nombre={el.nombre} tipo={el.tipo} rating={el.rating} imagen={el.imagen} precio={el.precio} key={el.id}/>

                </Link>

            </div>
          
        );
    })

    :   <p>loader</p>

}
        </div>

        <div className="filters">

            <h4 className="underline">Filters</h4>

            {/* componente filters */}

        </div>

    </div>

        )
}
