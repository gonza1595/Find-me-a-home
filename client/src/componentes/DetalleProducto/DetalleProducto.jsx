import React, { useEffect, useState } from "react";
import "./DetalleProducto.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { detalleProducto, limpiarEstadoDetalle,addToCart} from "../../redux/actions/index";
import axios from "axios";
import Loader from "../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetalleProducto = () => {
  //   const producto = useSelector((state) => state.detalle);
  const { id } = useParams();
  const [producto, setProducto] = React.useState();
  const history = useHistory();

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
    //console.log(quantitySelected, "3")
}, [quantitySelected])



function handleAddToCart(){
    producto.quantitySelected = quantitySelected;
    dispatch(addToCart(producto));
    /*notifyOK(); 
    setTimeout(() => {
        history.push(console.log)
    }, 3000);*/
};

const notifyOK = () => {
    toast.success("Added to cart", {
      theme: "colored",
    });
};

function handleBuyCart(){
    producto.quantitySelected = quantitySelected;
    dispatch(addToCart(producto));
    history.push("/carrito")
    notifyOK();
    setTimeout(() => {
     
    }, 3000);
}


  return (
    <>

      <div className="container">
        {!producto ? (
          <Loader/>
        ) : (
          <div>
            <a href="javascript:history.back()">
              <button className="home_button">Volver</button>
            </a>
            <div className="informacionDetalleProducto">
              <div className="nombreimg">
                <h2 id="nombre">{producto.nombre}</h2>
                <img
                  src={producto.imagen}
                  alt="img not found"
                  width="250px"
                  height="auto"
                />
              </div>
              <ul>
                <li>Precio: ${producto.precio}</li>
                <li>Calificación: {producto.calificacion}</li>
                <li>Stock: {producto.stock}</li>
                <li>Tipo: {producto.tipo}</li>
              </ul>
              <div className="descripDetalleProducto">
                <h4>Descripción:</h4>
                <p>{producto.descripcion}</p>
              </div>
              <NavLink to="/comprar" className="link">
                <button className="adopta">Comprar</button>
              </NavLink>
            </div>
            {/* carrito */}
          <div> 
          <form action='/carrito/agregar/${id}' name="form" method="post">
                                
                                <div>
                                    <div>
                                        <div>
                                            <button  onClick={e => restar(e)} value> - </button>
                                            {(producto.stock <= 0) ? <span>0</span>  : <span >{quantitySelected}</span>}
                                            <button  onClick={e => sumar(e)} value> + </button>
                                        </div>
                                        
                                    </div>

                                    {(producto.stock <= 0) ?
                                         (<div >
                                         <button  id="comprar">Buy now</button>
                                         <button  type="button"  id='agregarAlCarrito'  >Add to cart</button>
                                         </div>)  
                                         : 
                                         (<div >
                                         <button type="button" onClick={handleBuyCart}  id="comprar">Buy now</button>
                                         <button type="button" onClick={handleAddToCart} id='agregarAlCarrito'>Add to cart</button>
                                        </div>)
                                    }
                                   
                                </div>
                               
                            </form>
          </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetalleProducto;
