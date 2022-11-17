import axios from "axios";

//crear actions necesarias

export function buscarPorNombreMascota(nombre) {
  //MASCOTAS
  return async function (dispatch) {
    try {
      let json = await axios.get(
        `http://localhost:3001/mascotas?nombre=${nombre}`
      );
      return dispatch({
        type: "BUSCAR_POR_NOMBRE_MASCOTA",
        payload: json.data,
      });
    } catch (error) {
      alert("No se pudo encontrar la mascota");
    }
  };
}

export function traerMascotas() {
  return async function (dispatch) {
    dispatch({
      type: "LOADING",
    });
    try {
      let json = await axios.get("http://localhost:3001/mascotas");
      return dispatch({
        type: "TRAER_MASCOTAS",
        payload: json.data,
      });
    } catch (error) {
      alert("No se pueden traer las mascotas");
    }
  };
}

export function buscarPorNombreProducto(nombre) {
  //PRODUCTOS
  return async function (dispatch) {
    try {
      let json = await axios.get(
        `http://localhost:3001/productos?nombre=${nombre}`
      );
      return dispatch({
        type: "BUSCAR_POR_NOMBRE_PRODUCTO",
        payload: json.data,
      });
    } catch (error) {
      alert("No se pudo encontrar el producto");
    }
  };
}

export function traerProductos() {
  return async function (dispatch) {
    dispatch({
      type: "LOADING",
    });
    var json = await axios.get("http://localhost:3001/productos");

    return dispatch({
      type: "TRAER_PRODUCTOS",
      payload: json.data,
    });
  };
}

export function traerProductosfltrados(filtro, orden, tipo) {
  return async function (dispatch) {
    dispatch({
      type: "LOADING",
    });
    var json = await axios.get(
      `http://localhost:3001/productos?filtro=${filtro}&orden=${orden}&tipo=${tipo}`
    );

    return dispatch({
      type: "TRAER_PRODUCTOS",
      payload: json.data,
    });
  };
}

export const detalleMascota = (id) => (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  try {
    return axios
      .get("http://localhost:3001/mascotas/" + id)
      .then((respuesta) => {
        dispatch({
          type: "DETALLE_MASCOTA",
          payload: respuesta.data,
        });
      });
  } catch (e) {
    console.log(e);
    alert("No se pudo encontrar lo que buscaba");
  }
};

export const limpiarEstadoDetalle = () => {
  return {
    type: "LIMPIAR_ESTADO_DETALLE",
  };
};

export function formularioRegistroUsuario(payload) {
  return async function () {
    let json = await axios.post(
      "http://localhost:3001/usuario/registro",
      payload
    );
    return json;
  };
}

export function formularioPostMascota(payload) {
  return async function () {
    let json = await axios.post("http://localhost:3001/mascotas", payload);
    return json;
  };
}


export function formularioPostAdopcion(payload) {
  return async function () {
    let json = await axios.post("http://localhost:3001/formAdopcion", payload); 
  };
}


export const detalleProducto = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  try {
    const { data } = await axios.get("http://localhost:3001/productos/" + id);
    dispatch({ type: "DETALLE_PRODUCTO", payload: data });
  } catch (error) {
    console.log(error);
    alert("El producto no existe");
  }
};
export function formularioIniciarSesion(payload) {
  return async function () {
    let json = await axios.post("http://localhost:3001/", payload);
    return json;
  };
}

// Filtrados

export function filterBySexoMasculino(payload) {
  return {
    type: "FILTER_BY_SEXOMASCULINO",
    payload,
  };
}

export function filterBySexoFemenino(payload) {
  return {
    type: "FILTER_BY_SEXOFEMENINO",
    payload,
  };
}

export function filterByAmbosSexos(payload) {
  return {
    type: "FILTER_BY_AMBOS_SEXOS",
    payload,
  };
}

export function filterByTamañoPequeño(payload) {
  return {
    type: "FILTER_BY_TAMAÑO_PEQUEÑO",
    payload,
  };
}

export function filterByTamañoMediano(payload) {
  return {
    type: "FILTER_BY_TAMAÑO_MEDIANO",
    payload,
  };
}

export function filterByTamañoGrande(payload) {
  return {
    type: "FILTER_BY_TAMAÑO_GRANDE",
    payload,
  };
}

export function filterByTodosTamaños(payload) {
  return {
    type: "FILTER_BY_TODOS_TAMAÑOS",
    payload,
  };
}

// Ordenamientos

export function orderByNameAsc(payload) {
  return {
    type: "ORDER_BY_NAMEASC",
    payload,
  };
}

export function orderByNameDes(payload) {
  return {
    type: "ORDER_BY_NAMEDES",
    payload,
  };
}

export function orderByEdad(payload) {
  return {
    type: "ORDER_BY_EDAD",
    payload,
  };
}

export function adminBorrarProducto(id) {
  return { type: "ADMIN_BORRAR_PRODUCTO", payload: id };
}

export function adminBorrarMascota(id) {
  return { type: "ADMIN_BORRAR_MASCOTA", payload: id };
}

// pago 

export function realizarPago(id, amount) {
  return async function() {
    const {data}= await axios.post("http://localhost:3001/pagos" , {
      id,
      amount
    });
    console.log(data);
    return data;
  }
}

// carrito

export function addToCart(payload) {
  return {
      type: "ADD_TO_CART",
      payload
  }
};

export function getNumberCart() {
  return {
      type: "GET_NUMBER_CART"
  }
};


export function deleteCart(payload) {
  return {
      type: "DELETE_CART",
      payload
  }
};

export function increaseCart(payload) {
  return {
      type: "INCREASE_QUANTITY",
      payload
  }
};

export function decreaseCart(payload) {
  return {
      type: "DECREASE_QUANTITY",
      payload
  }
};

export function refreshCart(payload) {
  return {
      type: "REFRESH_CART",
      payload
  }
};