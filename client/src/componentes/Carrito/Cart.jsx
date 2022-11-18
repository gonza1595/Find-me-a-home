import { useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {decreaseCart, deleteCart, increaseCart } from "../../redux/actions/index";

/* import {withAuthenticationRequired} from '@auth0/auth0-react' */
/* withAuthenticationRequired (  */

/**/
//{ image, name, stock, precio, id, category, genre, age }
export default function Cart() {
  const productsInTheCart = useSelector(state => state.cart);
  const numberCart = useSelector(state => state.numberCart);
  const [myCartQuantity, setmyCartQuantity] = useState(0);


  /////////

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

  Object.keys(productsInTheCart).forEach(product => {
    totalCart += productsInTheCart[product].quantity * productsInTheCart[product].precio;
    listCart.push(productsInTheCart[product]);
  });

  const quantityState = listCart.map(el => el.quantity);

   /*useEffect(() => {
     quantityState
  }, [numberCart])*/
   

  function totalPrice(precio, item) {
    return Number(precio * item).toLocaleString('en-US');
  };

  function handleDecrease(e) {
    e.preventDefault();
    dispatch(decreaseCart(e.target.id));
  };

  function handleIncrease(e) {
    e.preventDefault();
      dispatch(increaseCart(e.target.id));
  };

  function handleDelete(e) {
    e.preventDefault();
    //window.confirm('Do you want to delete this product from the cart?');
    dispatch(deleteCart(e.target.id));
    
  };

  function handleNext() {
    history.push('/payment');
  }

  return (
    <div >
      <div >
        <div>My Cart ( {myCartQuantity} )</div>
      </div>
      <div ></div>
      <section >
        <div >
      {(productsInTheCart.length === 0) && (<div ><h1 >Your cart is empty.</h1>
      <p >But we have a lot of products waiting for you!</p></div>) }
          <div>
          </div>
          <div >
            {
              listCart.map((item, key) => {
                return (
                  <div  key={key}>
                    <button id={item.id} onClick={e => handleDelete(e)}>❌</button>
                    <a href={`/mascotas/${item.id}`}> {/* VER */}
                    <h3>{item.nombre.toUpperCase()}</h3>
                    <img src={item.imagen} alt={item.nombre} />
                    </a>
                    <ul>
                        <li><strong>Stock: </strong>{item.stock}</li>
                    </ul>
                    <div >
                    <button  onClick={e => handleDecrease(e)} id={item.id}>−</button>
                    <span id={item.id}>{quantityState.shift()}</span>
                    <button onClick={e => handleIncrease(e)} id={item.id}>＋</button>
                    </div>
                    <span>Total $ {totalPrice(item.precio, item.quantity)} </span>
                    <hr/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section> 
      
      {<section >
            <div >
              <div >
                <div >Purchase Summary</div>
                <ul >
                  <li >
                    <span>Total</span>
                    <span id="carritoTotal">$ {Number(totalCart).toLocaleString('en-US')}</span>
                  </li>
                </ul>
              </div>
              <div >
                <a href="/productos">Buy more Products </a>
              </div>
              <br />
              <br />
              {(productsInTheCart.length === 0) ? 
              (<div>
                <button type="button" onClick={handleNext} >Continue</button>
              </div>)
              :
              (<div >
              <button type="button" onClick={handleNext} >Continue</button>
            </div>)
            }
            </div>
      </section>}

 
    </div>
  )}


/* , {onRedirecting:()=><Loading/>}) ;
 */