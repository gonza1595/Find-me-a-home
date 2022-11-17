import axios from 'axios';
const {URL_BACK} = process.env;
//crear actions necesarias

export function buscarPorNombreMascota(nombre) {
	//MASCOTAS
	return async function (dispatch) {
		try {
			let json = await axios.get(`${URL_BACK}/mascotas?nombre=${nombre}`);
			return dispatch({
				type: 'BUSCAR_POR_NOMBRE_MASCOTA',
				payload: json.data,
			});
		} catch (error) {
			alert('No se pudo encontrar la mascota');
		}
	};
}

export function traerMascotas() {
	return async function (dispatch) {
		dispatch({
			type: 'LOADING',
		});
		try {
			let json = await axios.get(`${URL_BACK}/mascotas`);
			return dispatch({
				type: 'TRAER_MASCOTAS',
				payload: json.data,
			});
		} catch (error) {
			alert('No se pueden traer las mascotas');
		}
	};
}

export function buscarPorNombreProducto(nombre) {
	//PRODUCTOS
	return async function (dispatch) {
		try {
			let json = await axios.get(`${URL_BACK}/productos?nombre=${nombre}`);
			return dispatch({
				type: 'BUSCAR_POR_NOMBRE_PRODUCTO',
				payload: json.data,
			});
		} catch (error) {
			alert('No se pudo encontrar el producto');
		}
	};
}

export function traerProductos() {
	return async function (dispatch) {
		dispatch({
			type: 'LOADING',
		});
		var json = await axios.get(`${URL_BACK}/productos`);

		return dispatch({
			type: 'TRAER_PRODUCTOS',
			payload: json.data,
		});
	};
}

export function traerProductosfltrados(filtro, orden, tipo) {
	return async function (dispatch) {
		dispatch({
			type: 'LOADING',
		});
		var json = await axios.get(
			`${URL_BACK}/productos?filtro=${filtro}&orden=${orden}&tipo=${tipo}`
		);

		return dispatch({
			type: 'TRAER_PRODUCTOS',
			payload: json.data,
		});
	};
}

export const detalleMascota = (id) => (dispatch) => {
	dispatch({
		type: 'LOADING',
	});
	try {
		return axios.get(`${URL_BACK}/mascotas/` + id).then((respuesta) => {
			dispatch({
				type: 'DETALLE_MASCOTA',
				payload: respuesta.data,
			});
		});
	} catch (e) {
		console.log(e);
		alert('No se pudo encontrar lo que buscaba');
	}
};

export const limpiarEstadoDetalle = () => {
	return {
		type: 'LIMPIAR_ESTADO_DETALLE',
	};
};

export function formularioRegistroUsuario(payload) {
	return async function () {
		let json = await axios.post(`${URL_BACK}/usuario/registro`, payload);
		return json;
	};
}

export function formularioPostMascota(payload) {
	return async function () {
		let json = await axios.post(`${URL_BACK}/mascotas`, payload);
		return json;
	};
}

export function formularioPostAdopcion(payload) {

  return async function () {
    let json = await axios.post(`${URL_BACK}/formAdopcion`, payload); 
  };

}

export const detalleProducto = (id) => async (dispatch) => {
	dispatch({
		type: 'LOADING',
	});
	try {
		const {data} = await axios.get(`${URL_BACK}/productos/` + id);
		dispatch({type: 'DETALLE_PRODUCTO', payload: data});
	} catch (error) {
		console.log(error);
		alert('El producto no existe');
	}
};

export function formularioIniciarSesion(payload) {
	return async function () {
		let json = await axios.post(`${URL_BACK}/`, payload);
		return json;
	};
}

// Filtrados

export function filterBySexoMasculino(payload) {
	return {
		type: 'FILTER_BY_SEXOMASCULINO',
		payload,
	};
}

export function filterBySexoFemenino(payload) {
	return {
		type: 'FILTER_BY_SEXOFEMENINO',
		payload,
	};
}

export function filterByAmbosSexos(payload) {
	return {
		type: 'FILTER_BY_AMBOS_SEXOS',
		payload,
	};
}

export function filterByTamañoPequeño(payload) {
	return {
		type: 'FILTER_BY_TAMAÑO_PEQUEÑO',
		payload,
	};
}

export function filterByTamañoMediano(payload) {
	return {
		type: 'FILTER_BY_TAMAÑO_MEDIANO',
		payload,
	};
}

export function filterByTamañoGrande(payload) {
	return {
		type: 'FILTER_BY_TAMAÑO_GRANDE',
		payload,
	};
}

export function filterByTodosTamaños(payload) {
	return {
		type: 'FILTER_BY_TODOS_TAMAÑOS',
		payload,
	};
}

// Ordenamientos

export function orderByNameAsc(payload) {
	return {
		type: 'ORDER_BY_NAMEASC',
		payload,
	};
}

export function orderByNameDes(payload) {
	return {
		type: 'ORDER_BY_NAMEDES',
		payload,
	};
}

export function orderByEdad(payload) {
	return {
		type: 'ORDER_BY_EDAD',
		payload,
	};
}

export function adminBorrarProducto(id) {
	return {type: 'ADMIN_BORRAR_PRODUCTO', payload: id};
}

export function adminBorrarMascota(id) {
	return {type: 'ADMIN_BORRAR_MASCOTA', payload: id};
}

// esta accion es provisoria, hay que probar que funcione bien
export function adminActualizarMascota(id) {
	return async function () {
		const {data} = await axios.put(`${URL_BACK}/mascotas`, {
			id,
		});
		return data;
	};
}

export function adminCrearNuevaMascota(obj) {
	return (dispatch) =>
		fetch(`${URL_BACK}/mascotas`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(obj),
		})
			.then((resp) => resp.json())
			.then((data) => {
				dispatch({
					type: 'CREAR_NUEVA_MASCOTA',
					payload: data,
				});
			});
}

// pago

export function realizarPago(id, amount) {
	return async function () {
		const {data} = await axios.post(`${URL_BACK}/pagos`, {
			id,
			amount,
		});
		console.log(data);
		return data;
	};
}

// trae la mascota por ID para bajar toda la data a un form y poder editar
// blabla
export const adminTraerMascotaParaActualizar = (id) => (dispatch) => {
	dispatch({
		type: 'LOADING',
	});
	try {
		return axios
			.get(`${URL_BACK}/mascotas/mascotas/` + id)
			.then((respuesta) => {
				dispatch({
					type: 'TRAER_MASCOTA_PARA_ACTUALIZAR',
					payload: respuesta.data,
				});
			});
	} catch (e) {
		console.log(e);
		alert('No se pudo encontrar lo que buscaba');
	}
};
