const initialState = {
  mascotas: [],
  allMascotas: [],
  filteredBySexo: [],
  filteredByTamaño: [],
  filteredByEspecie: [],
  productos: [],
  allProductos: [],
  productoActualizado: [],
  detalle: {},
  productoDetalle: {},
  usuarios: [],
  login: JSON.parse(localStorage.getItem("login")) || [],
  allUsuarios: [],
  usuarioId: {},
  usuarioEditado: [],
  loading: false,
  actualizarMascota: [],
  comentarios: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  numberCart: 0,
  ordenes: [],
  totalCarrito: [],

  donaciones: [],

  traerOrdenes: [],

  //agregar mas estados si se requiere...
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "TRAER_MASCOTAS":
      return {
        ...state,
        mascotas: action.payload,
        allMascotas: action.payload,
        loading: false,
      };

    case "LOGIN":
      return {
        ...state,
        login: action.payload,
        loading: true,
        loading: false,
      };
    case "BUSCAR_POR_NOMBRE_MASCOTA":
      return {
        ...state,
        mascotas: action.payload,
      };
    case "BUSCAR_POR_NOMBRE_PRODUCTO":
      return {
        ...state,
        productos: action.payload,
      };

    case "DETALLE_MASCOTA":
      return {
        ...state,
        detalle: action.payload,
      };

    case "DETALLE_PRODUCTO":
      return {
        ...state,
        productoDetalle: action.payload,
      };

    case "LIMPIAR_ESTADO_DETALLE":
      return {
        ...state,
        detalle: {},
      };

    case "TRAER_PRODUCTOS":
      return {
        ...state,
        productos: action.payload,
        allProductos: action.payload,
        loading: false,
      };

    case "FILTER_BY_PERRO":
      state.filteredByEspecie = "perro";

      const byPerro = () => {
        if (!state.filteredBySexo.length && !state.filteredByTamaño.length) {
          return state.allMascotas.filter((e) => e.especie === "perro");
        } else if (
          !state.filteredBySexo.length &&
          state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) => e.especie === "perro" && e.tamaño === state.filteredByTamaño
          );
        } else if (
          state.filteredBySexo.length &&
          !state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) => e.especie === "perro" && e.sexo === state.filteredBySexo
          );
        } else if (
          state.filteredBySexo.length &&
          state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              e.especie === "perro" &&
              e.tamaño === state.filteredByTamaño &&
              e.sexo === state.filteredBySexo
          );
        }
      };

      return {
        ...state,
        mascotas: byPerro(),
      };
    case "FILTER_BY_GATO":
      state.filteredByEspecie = "gato";

      const byGato = () => {
        if (!state.filteredBySexo.length && !state.filteredByTamaño.length) {
          return state.allMascotas.filter((e) => e.especie === "gato");
        } else if (
          !state.filteredBySexo.length &&
          state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) => e.especie === "gato" && e.tamaño === state.filteredByTamaño
          );
        } else if (
          state.filteredBySexo.length &&
          !state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) => e.especie === "gato" && e.sexo === state.filteredBySexo
          );
        } else if (
          state.filteredBySexo.length &&
          state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              e.especie === "gato" &&
              e.tamaño === state.filteredByTamaño &&
              e.sexo === state.filteredBySexo
          );
        }
      };
      return {
        ...state,
        mascotas: byGato(),
      };

    case "FILTER_BY_TODAS_ESPECIES":
      state.filteredByEspecie = "";

      const byTodasLasEspecies = () => {
        if (!state.filteredBySexo.length && !state.filteredByTamaño.length) {
          return state.allMascotas;
        } else if (
          !state.filteredBySexo.length &&
          state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) => e.tamaño === state.filteredByTamaño && state.allMascotas
          );
        } else if (
          state.filteredBySexo.length &&
          !state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) => e.sexo === state.filteredBySexo && state.allMascotas
          );
        } else if (
          state.filteredBySexo.length &&
          state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              e.sexo === state.filteredBySexo &&
              e.tamaño === state.filteredByTamaño &&
              state.allMascotas
          );
        }
      };
      return {
        ...state,
        mascotas: byTodasLasEspecies(),
      };

    case "FILTER_BY_SEXOMASCULINO":
      state.filteredBySexo = "masculino";

      const masculino = () => {
        if (!state.filteredByEspecie.length && !state.filteredByTamaño.length) {
          return state.allMascotas.filter((e) => e.sexo === "masculino");
        } else if (
          !state.filteredByEspecie.length &&
          state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) => e.sexo === "masculino" && e.tamaño === state.filteredByTamaño
          );
        } else if (
          state.filteredByEspecie.length &&
          !state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              e.sexo === "masculino" && e.especie === state.filteredByEspecie
          );
        } else if (
          state.filteredByEspecie.length &&
          state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              e.sexo === "masculino" &&
              e.especie === state.filteredByEspecie &&
              e.tamaño === state.filteredByTamaño
          );
        }
      };
      return {
        ...state,
        mascotas: masculino(),
      };

    case "FILTER_BY_SEXOFEMENINO":
      state.filteredBySexo = "femenino";

      const femenino = () => {
        if (!state.filteredByEspecie.length && !state.filteredByTamaño.length) {
          return state.allMascotas.filter((e) => e.sexo === "femenino");
        } else if (
          !state.filteredByEspecie.length &&
          state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) => e.sexo === "femenino" && e.tamaño === state.filteredByTamaño
          );
        } else if (
          state.filteredByEspecie.length &&
          !state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              e.sexo === "femenino" && e.especie === state.filteredByEspecie
          );
        } else if (
          state.filteredByEspecie.length &&
          state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              e.sexo === "femenino" &&
              e.especie === state.filteredByEspecie &&
              e.tamaño === state.filteredByTamaño
          );
        }
      };
      return {
        ...state,
        mascotas: femenino(),
      };

    case "FILTER_BY_AMBOS_SEXOS":
      state.filteredBySexo = "";

      const byAmbosSexos = () => {
        if (!state.filteredByEspecie.length && !state.filteredByTamaño.length) {
          return state.allMascotas;
        } else if (
          state.filteredByEspecie.length &&
          !state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) => e.especie === state.filteredByEspecie && state.allMascotas
          );
        } else if (
          !state.filteredByEspecie.length &&
          state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) => e.tamaño === state.filteredByTamaño && state.allMascotas
          );
        } else if (
          state.filteredByEspecie.length &&
          state.filteredByTamaño.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              e.tamaño === state.filteredByTamaño &&
              e.especie === state.filteredByEspecie &&
              state.allMascotas
          );
        }
      };

      return {
        ...state,
        mascotas: byAmbosSexos(),
      };

    case "FILTER_BY_TAMAÑO_PEQUEÑO":
      state.filteredByTamaño = "pequeño";

      const byPequeño = () => {
        if (!state.filteredByEspecie.length && !state.filteredBySexo.length) {
          return state.allMascotas.filter((e) => e.tamaño === "pequeño");
        } else if (
          !state.filteredByEspecie.length &&
          state.filteredBySexo.length
        ) {
          return state.allMascotas.filter(
            (e) => e.tamaño === "pequeño" && e.sexo === state.filteredBySexo
          );
        } else if (
          state.filteredByEspecie.length &&
          !state.filteredBySexo.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              e.tamaño === "pequeño" && e.especie === state.filteredByEspecie
          );
        } else if (
          state.filteredByEspecie.length &&
          state.filteredBySexo.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              e.tamaño === "pequeño" &&
              e.especie === state.filteredByEspecie &&
              e.sexo === state.filteredBySexo
          );
        }
      };
      return {
        ...state,
        mascotas: byPequeño(),
      };

    case "FILTER_BY_TAMAÑO_MEDIANO":
      state.filteredByTamaño = "mediano";

      const byMediano = () => {
        if (!state.filteredByEspecie.length && !state.filteredBySexo.length) {
          return state.allMascotas.filter((e) => e.tamaño === "mediano");
        } else if (
          !state.filteredByEspecie.length &&
          state.filteredBySexo.length
        ) {
          return state.allMascotas.filter(
            (e) => e.tamaño === "mediano" && e.sexo === state.filteredBySexo
          );
        } else if (
          state.filteredByEspecie.length &&
          !state.filteredBySexo.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              e.tamaño === "mediano" && e.especie === state.filteredByEspecie
          );
        } else if (
          state.filteredByEspecie.length &&
          state.filteredBySexo.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              e.tamaño === "mediano" &&
              e.especie === state.filteredByEspecie &&
              e.sexo === state.filteredBySexo
          );
        }
      };

      return {
        ...state,
        mascotas: byMediano(),
      };
    case "FILTER_BY_TAMAÑO_GRANDE":
      state.filteredByTamaño = "grande";

      const byGrande = () => {
        if (!state.filteredByEspecie.length && !state.filteredBySexo.length) {
          return state.allMascotas.filter((e) => e.tamaño === "grande");
        } else if (
          !state.filteredByEspecie.length &&
          state.filteredBySexo.length
        ) {
          return state.allMascotas.filter(
            (e) => e.tamaño === "grande" && e.sexo === state.filteredBySexo
          );
        } else if (
          state.filteredByEspecie.length &&
          !state.filteredBySexo.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              e.tamaño === "grande" && e.especie === state.filteredByEspecie
          );
        } else if (
          state.filteredByEspecie.length &&
          state.filteredBySexo.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              e.tamaño === "grande" &&
              e.especie === state.filteredByEspecie &&
              e.sexo === state.filteredBySexo
          );
        }
      };

      return {
        ...state,
        mascotas: byGrande(),
      };

    case "FILTER_BY_TODOS_TAMAÑOS":
      state.filteredByTamaño = "";

      const todosTamaños = () => {
        if (!state.filteredByEspecie.length && !state.filteredBySexo.length) {
          return state.allMascotas;
        } else if (
          !state.filteredByEspecie.length &&
          state.filteredBySexo.length
        ) {
          return state.allMascotas.filter(
            (e) => e.sexo === state.filteredBySexo && state.allMascotas
          );
        } else if (
          state.filteredByEspecie.length &&
          !state.filteredBySexo.length
        ) {
          return state.allMascotas.filter(
            (e) => e.especie === state.filteredByEspecie && state.allMascotas
          );
        } else if (
          state.filteredByEspecie.length &&
          state.filteredBySexo.length
        ) {
          return state.allMascotas.filter(
            (e) =>
              state.allMascotas &&
              e.especie === state.filteredByEspecie &&
              e.sexo === state.filteredBySexo
          );
        }
      };

      return {
        ...state,
        mascotas: todosTamaños(),
      };

    case "ORDER_BY_NAMEASC":
      const ascOrder = state.mascotas.sort(function (a, b) {
        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
        return 0;
      });
      return {
        ...state,
        mascotas: ascOrder,
      };
    case "ORDER_BY_NAMEDES":
      const desOrder = state.mascotas.sort(function (a, b) {
        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return -1;
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return 1;
        return 0;
      });
      return {
        ...state,
        mascotas: desOrder,
      };

    case "ORDER_BY_EDAD":
      const orderEdad =
        action.payload === "max"
          ? state.mascotas.sort(function (a, b) {
              return b.edad - a.edad;
            })
          : state.mascotas.sort(function (a, b) {
              return a.edad - b.edad;
            });
      return {
        ...state,
        mascotas: orderEdad,
      };

    // filtros para productos dashboard admin

    case "ORDER_BY_NAME_PRODUCTO":
      const orderPorNombre = () => {
        if (action.payload === "asc") {
          return state.productos.sort(function (a, b) {
            if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
            if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
            return 0;
          });
        } else if (action.payload === "des") {
          return state.productos.sort(function (a, b) {
            if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return -1;
            if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return 1;
            return 0;
          });
        }
      };
      return {
        ...state,
        productos: orderPorNombre(),
      };

    case "FILTER_BY_TIPO":
      const filtroPorTipo = () => {
        if (action.payload === "paseo") {
          return state.allProductos.filter(
            (e) => e.tipo.toLowerCase() === "paseo"
          );
        } else if (action.payload === "alimentación") {
          return state.allProductos.filter(
            (e) => e.tipo.toLowerCase() === "alimentación"
          );
        } else if (action.payload === "juguetes") {
          return state.allProductos.filter(
            (e) => e.tipo.toLowerCase() === "juguetes"
          );
        } else if (action.payload === "all") {
          return state.allProductos;
        }
      };
      return {
        ...state,
        productos: filtroPorTipo(),
      };

    case "ORDER_BY_PRECIO":
      const orderByPrecio =
        action.payload === "max"
          ? state.productos.sort(function (a, b) {
              return b.precio - a.precio;
            })
          : state.productos.sort(function (a, b) {
              return a.precio - b.precio;
            });
      return {
        ...state,
        productos: orderByPrecio,
      };

    case "ORDER_BY_STOCK":
      const orderByStock =
        action.payload === "max"
          ? state.productos.sort(function (a, b) {
              return b.stock - a.stock;
            })
          : state.productos.sort(function (a, b) {
              return a.stock - b.stock;
            });
      return {
        ...state,
        productos: orderByStock,
      };

    // filtros usuarios dashboard admin

    case "ORDER_BY_NAME_USUARIO":
      const orderUsuario = () => {
        if (action.payload === "asc") {
          return state.usuarios.sort(function (a, b) {
            if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
            if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
            return 0;
          });
        } else if (action.payload === "desc") {
          return state.usuarios.sort(function (a, b) {
            if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return 1;
            if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return -1;
            return 0;
          });
        }
      };
      return {
        ...state,
        usuarios: orderUsuario(),
      };

    case "FILTER_BY_RANGO":
      const filterRango = () => {
        if (action.payload === "usuario") {
          return state.allUsuarios.filter((e) => e.rango === "usuario");
        } else if (action.payload === "refugio") {
          return state.allUsuarios.filter((e) => e.rango === "refugio");
        } else if (action.payload === "all") {
          return state.allUsuarios;
        }
      };
      return {
        ...state,
        usuarios: filterRango(),
      };

    case "ADMIN_BORRAR_PRODUCTO":
      return {
        ...state,
        productos: state.productos.filter((e) => e.id !== action.payload),
      };

    /* carrito */
    case "GET_NUMBER_CART":
      return {
        ...state,
      };

    case "ADD_TO_CART":
      if (state.numberCart === 0) {
        let shoppingCart = {
          id: action.payload.id,
          quantity: action.payload.quantitySelected,
          nombre: action.payload.nombre,
          imagen: action.payload.imagen,
          precio: action.payload.precio,
          stock: action.payload.stock,
        };
        state.cart.push(shoppingCart);
      } else {
        let check = false;
        state.cart.map((item, key) => {
          if (item.id === action.payload.id) {
            state.cart[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let cartShopping2 = {
            id: action.payload.id,
            /* age: action.payload.age, */
            quantity: action.payload.quantitySelected,
            nombre: action.payload.nombre,
            imagen: action.payload.imagen,
            precio: action.payload.precio,
            stock: action.payload.stock,
          };
          state.cart.push(cartShopping2);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };

    case "INCREASE_QUANTITY":
      const increaseItem = state.cart.find((x) => x.id === action.payload);
      state.numberCart++;
      increaseItem.quantity++;
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return {
        ...state,
      };
    case "DECREASE_QUANTITY":
      const decreaseItem = state.cart.find((x) => x.id === action.payload);
      if (decreaseItem.quantity > 1) {
        state.numberCart--;
        decreaseItem.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return {
        ...state,
      };

    case "DELETE_CART":
      const deleteItem = state.cart.find((x) => x.id === action.payload);
      const newCart = state.cart.filter((item) => {
        return item.id != deleteItem.id;
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        numberCart: state.numberCart - deleteItem.quantity,
        cart: newCart,
      };
    // case "REFRESH_CART":
    //   let cart = [];
    //   if (localStorage.getItem("cart")) {
    //     cart = JSON.parse(localStorage.getItem("cart"));
    //   }
    //   return {
    //     ...state,
    //     numberCart: 1,
    //     cart: cart,
    //   };
    case "ADMIN_EDITAR_PRODUCTO":
      return {
        ...state,
        productoActualizado: action.payload,
      };

    case "ADMIN_BORRAR_MASCOTA":
      return {
        ...state,
        mascotas: state.mascotas.filter(
          (mascota) => mascota.id !== action.payload
        ),
      };
    case "CREAR_NUEVA_MASCOTA":
      return {
        ...state,
        mascotas: action.payload,
      };
    case "TRAER_MASCOTA_PARA_ACTUALIZAR":
      return {
        ...state,
        actualizarMascota: action.payload,
      };

    case "TRAER_USUARIOS":
      return {
        ...state,
        usuarios: action.payload,
        allUsuarios: action.payload,
      };

    case "ADMIN_EDITAR_USUARIO":
      return {
        ...state,
        usuarioEditado: action.payload,
      };

    case "TRAER_USUARIOS_POR_ID":
      return {
        ...state,
        usuarioId: action.payload,
      };

    case "ADMIN_BORRAR_USUARIOS":
      return {
        ...state,
        usuarios: state.usuarios.filter(
          (usuario) => usuario.id !== action.payload
        ),
      };
    case "TRAER_REVIEW":
      return {
        ...state,
        comentarios: action.payload,
      };
    case "BORRAR_COMENTARIO":
      return {
        ...state,
      };
    case "CREAR_ORDEN":
      return {
        ...state,
        ordenes: action.payload,
      };
    case "CREAR_DONACION":
      return {
        ...state,
        donaciones: action.payload,
      };
    case "TRAER_DONACIONES":
      return {
        ...state,
        donaciones: action.payload,
      };
    case "MONTO_TOTAL":
      return {
        ...state,
        totalCarrito: action.payload,
      };
    case "TRAER_ORDENES":
      return {
        ...state,
        traerOrdenes: action.payload,
      };

    case "CLEAR_MONTO":
      return {
        ...state,
        totalCarrito: [],
      };

    default:
      return state;
  }
}

export default rootReducer;
