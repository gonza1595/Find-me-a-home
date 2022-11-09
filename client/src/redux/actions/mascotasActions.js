import axios from "axios";
import { detalleMascotas, limpiarDetalle, traerMascotas } from "../slices/mascotasSlice";

const url = 'http://localhost:3001/mascotas';

export const traerMascot =() => dispatch => {
    axios(`${url}/${1}`)
    .then(respuesta => dispatch(traerMascotas(respuesta.data)))
    .catch(e=>console.log(e))
}

export const detalleMascota =(id) => dispatch => {
    axios(`${url}/${1}`)
    .then(respuesta => dispatch(detalleMascotas(respuesta.data)))
    .catch(e=>console.log(e))
}
