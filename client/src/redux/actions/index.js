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

export function detalleMascota(id){
    return async function(dispatch){
        try{
            var json = await axios.get(`http://localhost:3001/mascotas/${id}`)
            return dispatch({
                type: "DETALLE_MASCOTA",
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export const limpiarEstadoDetalle = () => {
    return {
      type: "LIMPIAR_ESTADO_DETALLE"
    }
};

