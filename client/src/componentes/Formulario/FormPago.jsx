import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import './FormPago.css'
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  realizarPago,
  crearOrden,
  clearMonto,
  crearDonacion,
} from "../../redux/actions";
import { useHistory } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51M4ABWC8eMk9oyZJvAjADqxtDYWgXtA1ZH74dL5yANtT4MlFqYt68FEDStgG7k6LwTBZTTPQzi24vl4SatiAGBft00dI2TA07a"
);

const PagoForm = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const carrito = useSelector((state) => state.cart);
  const productos = carrito.map((carrito) => {
    return {
      nombre: carrito.nombre,
      cantidad: carrito.quantity,
      precio: carrito.precio,
    };
  });

  const login = useSelector((state) => state.login);
  const userID = login.id;

  console.log(userID);

  const montoTotal = useSelector((state) => state.totalCarrito);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });


    if (!error) {
      const { id } = paymentMethod;
      const amount = montoTotal * 100;


      console.log(amount)

      dispatch(realizarPago(id, amount));
      dispatch(crearOrden(userID, productos, montoTotal));
      dispatch(clearMonto());
      localStorage.removeItem("cart");
      alert("su pago se a realizado con exito");
      history.push("/");
    }
  };

  const modo = localStorage.getItem('modo');

  return (
    <div className={`pagos ${modo}`}>
    <form onSubmit={handleSubmit}>
      <div className={`datosTarjetaPago ${modo}`}>
        <CardElement />
      </div>
      <button>Comprar</button>
    </form>
    </div>
  );
};

function FormPago() {
  return (
    <Elements stripe={stripePromise}>
      <PagoForm />
    </Elements>
  );
}

export default FormPago;
