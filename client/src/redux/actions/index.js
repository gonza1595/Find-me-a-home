import axios from "axios";

//crear actions necesarias

<<<<<<< HEAD
export function buscarPorNombre(nombre){ //mascotas
=======
export function buscarPorNombreMascota(nombre){ //MASCOTAS
>>>>>>> dcd72fbcf601645629d88f94216ce01b70843838
    return async function(dispatch){
        try {
            let json = await axios.get('http://localhost:3001/mascotas?nombre=' + nombre);
            return dispatch({
<<<<<<< HEAD
                type: 'BUSCAR_POR_NOMBRE',
                payload: json.data
            })
        } catch (error) {
            alert('No se pudo encontrar lo que buscaba')
=======
                type: 'BUSCAR_POR_NOMBRE_MASCOTA',
                payload: json.data
            })
        } catch (error) {
            alert('No se pudo encontrar la mascota')
>>>>>>> dcd72fbcf601645629d88f94216ce01b70843838
        }
    }
}

<<<<<<< HEAD
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

=======

export function buscarPorNombreProducto(nombre){ //PRODUCTOS
    return async function(dispatch){
        try {
            let json = await axios.get('http://localhost:3001/productos?nombre=' + nombre);
            return dispatch({
                type: 'BUSCAR_POR_NOMBRE_PRODUCTO',
                payload: json.data
            })
        } catch (error) {
            alert('No se pudo encontrar el producto')
        }
    }
}

export function formularioIniciarSesion(payload){
    return async function(){
        let json = await axios.post('http://localhost:3001/', payload);
        return json;
    }
}
>>>>>>> dcd72fbcf601645629d88f94216ce01b70843838
