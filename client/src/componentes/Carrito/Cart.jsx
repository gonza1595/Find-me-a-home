import { useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./carrito.css";
import {
  decreaseCart,
  deleteCart,
  increaseCart,
  montoTotal
} from "../../redux/actions/index";
import { Link } from "react-router-dom";

/* import {withAuthenticationRequired} from '@auth0/auth0-react' */
/* withAuthenticationRequired (  */

/**/
//{ image, name, stock, precio, id, category, genre, age }
export default function Cart() {
  const productsInTheCart = useSelector((state) => state.cart);
  const numberCart = useSelector((state) => state.numberCart);
  const [myCartQuantity, setmyCartQuantity] = useState(0);

  const modo = localStorage.getItem('modo');

  /////////
  const LS = localStorage.getItem('login');
  const calculatemyCartQuantity = () => {
    let counter = 0;
    productsInTheCart.forEach((item) => {
      counter += item.quantity;
    });
    setmyCartQuantity(counter);
  };

  useEffect(() => {
    calculatemyCartQuantity();
  }, [numberCart]);

  const dispatch = useDispatch();
  const history = useHistory();

  let listCart = [];
  let totalCart = 0;

  Object.keys(productsInTheCart).forEach((product) => {
    totalCart +=
      productsInTheCart[product].quantity * productsInTheCart[product].precio;
    listCart.push(productsInTheCart[product]);
  });

  const quantityState = listCart.map((el) => el.quantity);

  /*useEffect(() => {
     quantityState
  }, [numberCart])*/

  function totalPrice(precio, item) {
    return Number(precio * item).toLocaleString("en-US");
  }

  function handleDecrease(e) {
    e.preventDefault();
    dispatch(decreaseCart(e.target.id));
  }

  function handleIncrease(e) {
    e.preventDefault();
    dispatch(increaseCart(e.target.id));
  }

  function handleDelete(e) {
    e.preventDefault();
    //window.confirm('Do you want to delete this product from the cart?');
    dispatch(deleteCart(e.target.id));
  }
  function añadir(e) {
    e.preventDefault();
    history.push("/productos");
  }

  function handleNext() {
    dispatch(montoTotal(totalCart));
    history.push("/pagos");
  }
  

  return (
    <div className={`carrito-container ${modo}`}>
      <div className={`myCart ${modo}`}>Productos en mi carrito ( {myCartQuantity} )</div>

      <div className="prodYresum">
        <section>
          <div>
            {productsInTheCart.length === 0 && (
              <div>
                <h1>Tu carrito esta vacio.</h1>
                {/* <p >But we have a lot of products waiting for you!</p>*/}
              </div>
            )}

            <div>
              {listCart.map((item, key) => {
                return (
                  <div className="prodCart" key={key}>
                    <a href={`/productos/${item.id}`}>
                      <img
                        className="img-carrito"
                        src={item.imagen}
                        alt={item.nombre}
                      />
                    </a>

                    <h3 className="nombre-carrito">
                      {item.nombre.toUpperCase()}
                    </h3>

                    <h5 className="items-carrito">Stock: {item.stock}</h5>

                    <div>
                      <button onClick={(e) => handleDecrease(e)} id={item.id}>
                        −
                      </button>
                      <span id={item.id}>{quantityState.shift()}</span>
                      <button
                        disabled={item.quantity === item.stock ? true : false}
                        onClick={(e) => handleIncrease(e)}
                        id={item.id}
                      >
                        ＋
                      </button>
                    </div>

                    <div className="items-carrito">
                      <span>
                        Total $ {totalPrice(item.precio, item.quantity)}{" "}
                      </span>
                    </div>

                    <button id={item.id} onClick={(e) => handleDelete(e)}>
                      ❌
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className={`resumen ${modo}`}>
            <div className={`resumenCompra ${modo}`}>Resumen de compra</div>

            <span className="items-carrito">Total</span>
            <span id="carritoTotal">
              $ {Number(totalCart).toLocaleString("en-US")}
            </span>

            <div className="botFinales">
              <div className="items-carrito">
                <button onClick={(e) => añadir(e)}>
                  Comprar mas productos{" "}
                </button>
              </div>

              <br />
              <br />

              {productsInTheCart.length === 0 ? null : (

                LS?

                <div className="buttonComprar">
                  <button type="button" onClick={handleNext}>
                    Finalizar compra
                  </button>
                </div>

                :

                <Link to="/iniciarSesion">
            
                <button>Logueate para comprar</button>
    
                </Link>
                
              )}
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
