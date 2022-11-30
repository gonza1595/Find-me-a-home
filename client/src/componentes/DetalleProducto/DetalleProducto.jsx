import React, { useEffect, useState } from "react";
import "./DetalleProducto.css";
import { useDispatch } from "react-redux";
import {  useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { detalleProducto, limpiarEstadoDetalle,addToCart} from "../../redux/actions/index";
import axios from "axios";
import Loader from "../Loader/Loader";
import Review from "../Review/Review";

import Comentarios from "../Comentarios/Comentarios.jsx"



const DetalleProducto = () => {
  //   const producto = useSelector((state) => state.detalle);
  const { id } = useParams();
  const [producto, setProducto] = React.useState();
  const history = useHistory();

  const modo = localStorage.getItem('modo');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detalleProducto(id));
 
    return () => {
      dispatch(limpiarEstadoDetalle());
    };
  }, []);

  const getProduct = useEffect(() => {
    try {
      axios.get(`/productos/${id}`)
        .then((data) => {
          setProducto(data.data);
        });
    } catch (e) {
      console.log(e);
    }
  }, [id]);



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
    if(quantitySelected === producto.stock || producto.stock <= 0){
        return
    }
     return setQuantitySelected(quantitySelected +1)
};

useEffect(() => {
}, [quantitySelected])




function handleAddToCart(){
    producto.quantitySelected = quantitySelected;
    dispatch(addToCart(producto));
    
    alert('Producto añadido al carrito')
    //history.push("/productos")
    /* setTimeout(() => {
        history.push(console.log)
    }, 3000);*/
};


function handleBuyCart(){
    producto.quantitySelected = quantitySelected;
    dispatch(addToCart(producto));
    history.push("/carrito")
}

  return (
    <>
      <div className={`container ${modo}`}>

        {!producto ? (
          <Loader/>
        ) : ( 
          <div className={`container ${modo}`}>
            <a href="javascript:history.back()">
              <button className="home_button">Volver</button>
            </a>
            <div className={`informacionDetalleProducto ${modo}`}>

              <div className="nombreimg">
                <h2 id="nombre">{producto.nombre}</h2>
                <img
                  src={producto.imagen}
                  alt="img not found"
                  width="250px"
                  height="auto"
                />
              </div>
              <div>
              <ul>
                <li>Precio: ${producto.precio}</li>
                {/* <li>Calificación: {producto.calificacion}</li> */}
                <li>Stock: {producto.stock}</li>
                <li>Tipo: {producto.tipo}</li>
              </ul>

              </div>
              <div className="descripDetalleProducto">
                <h4 >Descripción:</h4>
                <p>{producto.descripcion}</p>
                 {/* carrito */}
          <div className="carrito-enDetalle"> 
          <form action='/carrito/agregar/${id}' name="form" method="post">
                                
                                <div>
                                    <div>
                                        <div className="botones-carrito">
                                            <button  onClick={e => restar(e)} value> - </button>
                                            {(producto.stock <= 0) ? <span>0</span>  : <span >{quantitySelected}</span>}
                                            <button  onClick={e => sumar(e)} value> + </button>
                                        </div>
                                        
                                    </div>

                                    {(producto.stock <= 0) ?
                                         (<div >
                                         <button  id="comprar">Comprar ahora</button>
                                         <button  type="button"  id='agregarAlCarrito'>Añadir al carrito</button>
                                         </div>)  
                                         : 
                                         (<div >
                                         <button type="button" onClick={handleBuyCart}  id="comprar">Comprar ahora</button>
                                         <button type="button" onClick={handleAddToCart} id='agregarAlCarrito'>Añadir al carrito</button>
                                        </div>)
                                    }
                                   
                                </div>
                               
                            </form>
                            </div>
          </div>
              </div>
            <div className="comentari"> 
           <Comentarios id={id}/>
           <div className={`comentarios-Detalle ${modo}`}> 

           <h4>Comentarios:</h4>
            <div> 

           { !producto.comentarios.length? (<p>No hay comentarios</p>) :
           producto.comentarios.map(e => (
            <ul>💬 {e}</ul>
           
           ))} </div>      
            </div>
            </div>
          </div>
          
          
        )}
      </div>
      
    </>
  );
};

export default DetalleProducto;
