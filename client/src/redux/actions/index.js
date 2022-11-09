import axios from "axios";

//crear actions necesarias

export function buscarPorNombre(nombre){ //mascotas
    return async function(dispatch){
        try {
            let json = await axios.get('http://localhost:3001/mascotas?nombre=' + nombre);
            return dispatch({
                type: 'BUSCAR_POR_NOMBRE',
                payload: json.data
            })
        } catch (error) {
            alert('No se pudo encontrar lo que buscaba')
        }
    }
}

//Buscar un pokemon por el id 
export const detalleMascota =(id) => dispatch => {
    try {
      return axios.get('http://localhost:3001/mascotas/'+id)
        .then(respuesta =>{
          dispatch({
            type: "DETALLE_MASCOTA",
            payload: respuesta.data,
          });
        })
    } catch (e) {
        console.log(e);
        alert('No se pudo encontrar lo que buscaba')
    }
};

export const limpiarEstadoDetalle = () => {
    return {
      type: "LIMPIAR_ESTADO_DETALLE"
    }
};

