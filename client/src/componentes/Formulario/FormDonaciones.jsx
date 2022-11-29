import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { realizarPago, crearDonacion, clearMonto, traerUsuarios } from "../../redux/actions/index.js";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";


const stripePromise = loadStripe(
    "pk_test_51M4ABWC8eMk9oyZJvAjADqxtDYWgXtA1ZH74dL5yANtT4MlFqYt68FEDStgG7k6LwTBZTTPQzi24vl4SatiAGBft00dI2TA07a"
  );

const FormDonacion = () => {

    const dispatch = useDispatch();
    const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  useEffect(() => {
    dispatch(traerUsuarios());
  }, []);

    const users = useSelector((state) => state.usuarios);
    const usuarios= users;
    const refugios= usuarios.filter((usuario) => usuario.rango === "refugio");
    
      const login = useSelector((state) => state.login);
      const userID = login[0];

      
      const [refugio, setRefugio]= useState("");
      const [monto, setMonto] = useState(0);
      

      const handleRefugio= (e) => {
        e.preventDefault();
        setRefugio(e.target.value);
      };

      const handleMonto= (e) => {
        e.preventDefault();
        setMonto(e.target.value);
      }
      
     

    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
        });
    
        if (!error) {
          
            
            const { id } = paymentMethod;
            const amount = monto * 100;
            const montoTotal= monto;
            console.log(montoTotal);
            dispatch(realizarPago(id, amount));
            dispatch(crearDonacion(refugio, userID, montoTotal));
            dispatch(clearMonto());
            setRefugio("");
            setMonto(0);
            alert("su donación se a realizado con exito");
            history.push("/");
          }  
        
      };

      return (
        <form onSubmit={(e) => handleSubmit(e)}>
         <div>  
          <div>
          <p>A que refugio desea donar?</p>  
          <select
          onChange={(e) => handleRefugio(e)}>
            {refugios.map((refugio) => {
                return <option key={refugio.id} value={refugio.nombre}>{refugio.nombre} </option>
            })}
          </select>
            </div>
            <div>
            <p>seleccionar monto a donar:</p>    
          <input type="number" onChange={(e) => handleMonto(e)}/>
                </div>  
          <div>
            <p>completar los datos de su tarjeta:</p>
          <CardElement />
          </div>
          <button>Donar</button>
          </div> 
        </form>
      );
    
}

function DonacionForm() {
    return (
      <Elements stripe={stripePromise}>
        <FormDonacion />
      </Elements>
    );
  }
export default DonacionForm;