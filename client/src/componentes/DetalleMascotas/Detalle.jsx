import React, { useEffect, useState } from "react";
import "./Detalle.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams} from "react-router-dom";
import { useHistory } from "react-router";
import { addToCart } from "../../redux/actions/index";
import { Link } from "react-router-dom";

import {
  detalleMascota,
  limpiarEstadoDetalle,
} from "../../redux/actions/index";
import Loader from "../Loader/Loader";

export default function Detalle() {
  const dispatch = useDispatch();

  const modo = localStorage.getItem('modo');


  const LS = localStorage.getItem('login');
  const params = useParams();
  const mascotas = useSelector((state) => state.detalle);
  useEffect(() => {
    dispatch(detalleMascota(params.id));
    return () => {
      dispatch(limpiarEstadoDetalle());
    };
  }, []);



// carrito
  const [quantitySelected, setQuantitySelected] = useState(1);

  function restar(e) {
      e.preventDefault()
      if(quantitySelected === 1){
          return
      }
      return setQuantitySelected(quantitySelected -1)
  }
  function sumar(e) {
      e.preventDefault()
      if(quantitySelected === mascotas.stock || mascotas.stock <= 0){
          return
      }
       return setQuantitySelected(quantitySelected +1)
  };

  useEffect(() => {
      //console.log(quantitySelected, "3")
  }, [quantitySelected])
  

 
  function handleAddToCart(){
      mascotas.quantitySelected = quantitySelected;
      dispatch(addToCart(mascotas));
  };



  function handleBuyCart(){
      mascotas.quantitySelected = quantitySelected;
      dispatch(addToCart(mascotas));
  }

  return (
    <div >
      {!mascotas ? (
        <Loader />
      ) : (
        <div className={`containerDetalle ${modo}`}>
          <a href="javascript:history.back()">
            <button className="home_button">Volver</button>
          </a>
          <div className={`informacionDetalleMascotas ${modo}`}>

        
            <div className="nombreimg">
              <h2 id="nombre">{mascotas.nombre}</h2>
              <img
                src={mascotas.imagen}
                alt="img not found"
                width="250px"
                height="auto"
              />
               <div className="info-mascota"> 
            <ul > 
              <li > 
                <strong>Edad</strong>:{" "}
                {mascotas.edad === 1
                  ? `${mascotas.edad} año`
                  : `${mascotas.edad} años`}
              </li>
              <li>  <strong>Sexo</strong>: {mascotas.sexo}</li>
              <li>  <strong>Raza</strong>: {mascotas.raza}</li>
              <li>  <strong>Tamaño</strong>: {mascotas.tamaño}</li>
</ul>
            </div>
            </div>
           
            <div className="descripDetalleMascota">
              <h4 className="titulo-mascota">Descripción:</h4>
              <p className="descripcion-mascota">{mascotas.descripcion}</p>
           
          
{
LS?
 <NavLink to="/formAdopcion" >
          
              <button className="adopta-boton"> {""} Adopta {""}</button>
            </NavLink>
:
 <Link to="/iniciarSesion">
            
  <button>Logueate para adoptar</button>

  </Link>
}


           



            </div>


            


          </div>
        </div>
        
      )}
    </div>
  );
}
