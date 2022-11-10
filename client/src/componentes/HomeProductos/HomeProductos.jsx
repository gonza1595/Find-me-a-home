import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBarProducto";
import "./HomeProductos.css"
import {traerProductos} from "../../redux/actions/index.js"
//importar paginado cuando este disponible
//importar carta de producto cuando este disponible

export default function HomeProductos (){

    const dispatch = useDispatch()

    
    const productos = useSelector((state)=>state.productos)

    useEffect(() => {
        dispatch(traerProductos());
      }, [dispatch]);

    return (
<h1>{productos}</h1>
    )
}
