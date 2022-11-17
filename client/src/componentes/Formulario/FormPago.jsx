import React from "react";
import {useDispatch} from "react-redux";
import {loadStripe} from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { realizarPago } from "../../redux/actions";
import { useHistory } from "react-router-dom";

const stripePromise = loadStripe("pk_test_51M4ABWC8eMk9oyZJvAjADqxtDYWgXtA1ZH74dL5yANtT4MlFqYt68FEDStgG7k6LwTBZTTPQzi24vl4SatiAGBft00dI2TA07a");

    const PagoForm = () => {
    const dispatch = useDispatch();
    const stripe= useStripe();
    const elements= useElements();
    const history= useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
      const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });

        if(!error){
            const {id}= paymentMethod;
            const amount= 100000;
            dispatch(realizarPago(id, amount));
            alert("su pago se a realizado con exito");
            history.push("/");
        }
    };
    return (
        
            <form onSubmit={handleSubmit}> 
                <CardElement/>
                <button>
                    Comprar
                </button>
            </form>
           
    )

}

function FormPago () {
   return(
       <Elements stripe={stripePromise}>
         <PagoForm/>
       </Elements>
   );
}

export default FormPago;