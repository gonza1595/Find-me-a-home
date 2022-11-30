import axios from "axios";


// const {URL_BACK} = process.env;

//crear actions necesarias

export function buscarPorNombreMascota(nombre) {
  //MASCOTAS
  return async function (dispatch) {
    try {
      let json = await axios.get(`/mascotas?nombre=${nombre}`);
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
      let json = await axios.get(`/mascotas`);
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
      let json = await axios.get(`/productos?nombre=${nombre}`);
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
    var json = await axios.get(`/productos`);

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
      `/productos?filtro=${filtro}&orden=${orden}&tipo=${tipo}`
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
    return axios.get("/mascotas/" + id).then((respuesta) => {
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
    let json = await axios.post(`/usuario/registro`, payload);
    return json;
  };
}

export function formularioPostMascota(payload) {
  return async function () {
    let json = await axios.post(`/mascotas`, payload);
    return json;
  };
}

export const logOut = () => {

  localStorage.removeItem("login")
  
  return {
    type: "LOGOUT",
  };
};

export function formularioLogin(correo, contraseña) {
  return async function () {
    const json = await axios.post(`/usuario/login`, { correo, contraseña });
    
    localStorage.setItem("login", JSON.stringify(json.data)
  );

    console.log(json.data);

    return {
      type: "LOGIN",
      payload: json.data,
    };
  };
}

export function formularioPostAdopcion(payload) {
  return async function () {
    return await axios.post(`mascotas/fomAdopcion`, payload);
  };
}

export const detalleProducto = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  try {
    const { data } = await axios.get(`/productos/` + id);
    dispatch({ type: "DETALLE_PRODUCTO", payload: data });
  } catch (error) {
    console.log(error);
    alert("El producto no existe");
  }
};

export const crearProducto = (payload) => {
  return async function () {
    let producto = await axios.post(`/productos`, payload);
    return producto;
  };
};

export function formularioIniciarSesion(payload) {
  return async function () {
    let json = await axios.post(`/`, payload);
    return json;
  };
}

export function solicitarContraseña(correo) {
  return async function () {
    let json = await axios.put("/usuario/nueva-pass", { correo });
    return json;
  };
}

export function cambiarContraseña(correo, contraseña, nuevaContraseña) {
  return async function () {
    let json = await axios.put("/usuario/login/new-pass", {
      correo,
      contraseña,
      nuevaContraseña,
    });
    return json;
  };
}

// Filtrados

export function filterByPerro(payload) {
  return {
    type: "FILTER_BY_PERRO",
    payload,
  };
}

export function filterByGato(payload) {
  return {
    type: "FILTER_BY_GATO",
    payload,
  };
}

export function filterByTodasEspecies(payload) {
  return {
    type: "FILTER_BY_TODAS_ESPECIES",
    payload,
  };
}
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

// filtros productos para dashboard admin

export function orderByNameProducto(payload) {
  return {
    type: "ORDER_BY_NAME_PRODUCTO",
    payload,
  };
}

export function filterByTipo(payload) {
  return {
    type: "FILTER_BY_TIPO",
    payload,
  };
}

export function orderByPrecio(payload) {
  return {
    type: "ORDER_BY_PRECIO",
    payload,
  };
}

export function orderByStock(payload) {
  return {
    type: "ORDER_BY_STOCK",
    payload,
  };
}

// filtros usuarios admin dashboard

export function orderByNameUsuario(payload) {
  return {
    type: "ORDER_BY_NAME_USUARIO",
    payload,
  };
}

export function filterByRango(payload) {
  return {
    type: "FILTER_BY_RANGO",
    payload,
  };
}

export function adminBorrarProducto(id) {
  return async (dispatch) => {
    await axios.delete(`/productos/${id}`);
    dispatch({
      type: "ADMIN_BORRAR_PRODUCTO",
      payload: id,
    });
  };
}

export function adminEditarProducto(id, producto) {
  return async function () {
    const { data } = await axios.put(
      `/productos/editarProducto?id=${id}`,
      producto
    );
    return data;
  };
}

export function adminBorrarMascota(id) {
  return async (dispatch) => {
    await axios.delete(`/mascotas/${id}`);
    dispatch({
      type: "ADMIN_BORRAR_MASCOTA",
      payload: id,
    });
  };
}

export function adminActualizarMascota(id, mascota) {
  return async function () {
    const { data } = await axios.put(
      `/mascotas/editarMascota?id=${id}`,
      mascota
    );
    return data;
  };
}

export function adminCrearNuevaMascota(obj) {
  return (dispatch) =>
    axios
      .post(`/mascotas`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: "CREAR_NUEVA_MASCOTA",
          payload: data,
        });
      });
}

// acciones para traer, borrar y editar usuarios

export const traerUsuarios = () => {
  return async (dispatch) => {
    let usuarios = await axios.get(`/usuario/users`);
    dispatch({
      type: "TRAER_USUARIOS",
      payload: usuarios.data,
    });
  };
};

export const traerUsuariosPorId = (id) => {
  return async (dispatch) => {
    let usuariosId = await axios.get(`/usuario/users/${id}`);
    dispatch({
      type: "TRAER_USUARIOS_POR_ID",
      payload: usuariosId.data,
    });
  };
};

export const adminBorrarUsuarios = (id) => {
  return async (dispatch) => {
    let borrarUsuario = await axios.delete(`/usuario/users/${id}`);
    dispatch({
      type: "ADMIN_BORRAR_USUARIOS",
      payload: id,
    });
  };
};

export const adminEditarUsuario = (id, userActualizado) => {
  return async (dispatch) => {
    let editarUsuario = await axios.put(
      `/usuario/editarUsuario?id=${id}`,
      userActualizado
    );
    dispatch({
      type: "ADMIN_EDITAR_USUARIO",
      payload: editarUsuario.data,
    });
  };
};

// pago

// carrito

export function addToCart(payload) {
  return {
    type: "ADD_TO_CART",
    payload,
  };
}

export function getNumberCart() {
  return {
    type: "GET_NUMBER_CART",
  };
}

export function deleteCart(payload) {
  return {
    type: "DELETE_CART",
    payload,
  };
}

export function increaseCart(payload) {
  return {
    type: "INCREASE_QUANTITY",
    payload,
  };
}

export function decreaseCart(payload) {
  return {
    type: "DECREASE_QUANTITY",
    payload,
  };
}

// export function refreshCart(payload) {
//   return {

//       type: "REFRESH_CART",
//       payload
//   }
// };
////////////////////////////

export function realizarPago(id, amount) {
  return async function () {

    const dataa = localStorage.getItem('login');
    const {tokenSesion}= dataa
    const token = `bearer ${tokenSesion}`


    console.log(dataa);
    console.log(tokenSesion);
    console.log(token);

    const { data } = await axios.post(`/pagos`,
    
    {
      headers:{
        
        authorization: token

      },

      body:{
        id,
        amount

      }
    });
    console.log(data);

    return data;
  };
}

// return async function () {
//   const { data } = await axios.post(`/pagos`, {
//     id,
//     amount,
//   });
//   console.log(data);
//   return data;
// };

// trae la mascota por ID para bajar toda la data a un form y poder editar
// blabla
export const adminTraerMascotaParaActualizar = (id) => (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  try {
    return axios.get(`/mascotas/mascotas/` + id).then((respuesta) => {
      dispatch({
        type: "TRAER_MASCOTA_PARA_ACTUALIZAR",
        payload: respuesta.data,
      });
    });
  } catch (e) {
    console.log(e);
    alert("No se pudo encontrar lo que buscaba");
  }
};

export function Review(payload) {
  return async function () {
    let json = await axios.put(`productos/agregarComentario`, payload);
    return json;
  };
}

export function traerReview() {
  return async (dispatch) => {
    let comentarios = await axios.get(`/comentarios`);
    dispatch({
      type: "TRAER_REVIEW",
      payload: comentarios.data,
    });
  };
}

export const deleteComment = (comment) => {
  return async function (dispatch) {
    try {
      console.log(comment);
      const deleteComment = axios.delete("/comentarios " + comment);
      dispatch({
        type: "BORRAR_COMENTARIO",
        payload: deleteComment,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const crearOrden = (userID, productos, montoTotal) => {
  return async function (dispatch) {
    try {
      const orden = await axios.post("/ordenes", {
        userID,
        productos,
        montoTotal,
      });
      console.log(orden.data);
      dispatch({
        type: "CREAR_ORDEN",
        payload: orden.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const crearDonacion = (refugio, userID, montoTotal) => {
  return async function (dispatch) {
    try {
      const donacion = await axios.post("/donaciones", {
        refugio,
        userID,
        montoTotal,
      });
      dispatch({
        type: "CREAR_DONACION",
        payload: donacion.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const montoTotal = (total) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: "MONTO_TOTAL",
        payload: total,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearMonto = () => {
  return async function (dispatch) {
    try {
      dispatch({
        type: "CLEAR_MONTO",
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const traerOrdenes = () => {
  return async function (dispatch) {
    try {
      const ordenes = await axios.get("/ordenes");
      dispatch({
        type: "TRAER_ORDENES",
        payload: ordenes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const traerDonaciones = () => {
  return async function (dispatch) {
    try {
      const donaciones = await axios.get("/donaciones");
      dispatch({
        type: "TRAER_DONACIONES",
        payload: donaciones.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
