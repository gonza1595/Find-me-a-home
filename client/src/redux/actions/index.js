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
