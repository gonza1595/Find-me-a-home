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

export function formularioIniciarSesion(payload){
    return async function(){
        let json = await axios.post('http://localhost:3001/', payload);
        return json;
    }
}