import axios from "axios";

//crear actions necesarias

export function buscarPorNombreMascota(nombre){ //MASCOTAS
    return async function(dispatch){
        try {
            let json = await axios.get('http://localhost:3001/mascotas?nombre=' + nombre);
            return dispatch({
                type: 'BUSCAR_POR_NOMBRE_MASCOTA',
                payload: json.data
            })
        } catch (error) {
            alert('No se pudo encontrar la mascota')
        }
    }
}


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




export function traerProductos (){

    return async function(dispatch){
        var json = await axios.get ("http://localhost:3001/productos")
        
        return dispatch({
            type: "TRAER_PRODUCTOS",
            payload: json.data,
            })
    }
};

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
}



export const limpiarEstadoDetalle = () => {
    return {
      type: "LIMPIAR_ESTADO_DETALLE"
    }
};

export function formularioRegistroUsuario(payload){
    return async function(){
        let json = await axios.post('http://localhost:3001/', payload);
        return json;
    }
}

export function formularioPostMascota(payload){
    return async function(){
        let json = await axios.post('http://localhost:3001/mascotas', payload);
        return json;
    }
}