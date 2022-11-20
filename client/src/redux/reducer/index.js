const initialState = {
  mascotas: [],
  allMascotas: [],
  filteredBySexo: [],
  filteredByTamaño: [],
  productos: [],
  productoActualizado: [],
  detalle: {},
  productoDetalle: {},
  usuarios: [],
  usuarioId: {},
  usuarioEditado: [],
  loading: false,
  actualizarMascota: [],
  cart: [],
  numberCart: 0,

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
        loading: false,
      };

    case "FILTER_BY_SEXOMASCULINO":
      state.filteredBySexo = "masculino";
      const bySexoMasculino = state.allMascotas.filter((e) => {
        return state.filteredBySexo
          ? e.sexo.toLowerCase() === "masculino" &&
              e.sexo === state.filteredBySexo
          : e.sexo.toLowerCase() === "masculino";
      });
      return {
        ...state,
        mascotas: bySexoMasculino,
      };

    case "FILTER_BY_SEXOFEMENINO":
      state.filteredBySexo = "femenino";
      const bySexoFemenino = state.allMascotas.filter((e) => {
        return state.filteredBySexo
          ? e.sexo.toLowerCase() === "femenino" &&
              e.sexo === state.filteredBySexo
          : e.sexo.toLowerCase() === "femenino";
      });
      return {
        ...state,
        mascotas: bySexoFemenino,
      };

    case "FILTER_BY_AMBOS_SEXOS":
      state.filteredBySexo = null;
      const byAmbosSexos = state.filteredByTamaño
        ? state.allMascotas.filter((e) => e.tamaño === state.filteredByTamaño)
        : state.allMascotas;

      return {
        ...state,
        mascotas: byAmbosSexos,
      };

    case "FILTER_BY_TAMAÑO_PEQUEÑO":
      state.filteredByTamaño = "pequeño";
      const byPequeño = state.allMascotas.filter((e) => {
        return state.filteredBySexo
          ? e.tamaño.toLowerCase() === "pequeño" &&
              e.sexo === state.filteredBySexo
          : e.tamaño.toLowerCase() === "pequeño";
      });
      return {
        ...state,
        mascotas: byPequeño,
      };

    case "FILTER_BY_TAMAÑO_MEDIANO":
      state.filteredByTamaño = "mediano";
      const byMediano = state.allMascotas.filter((e) => {
        return state.filteredBySexo
          ? e.tamaño.toLowerCase() === "mediano" &&
              e.sexo === state.filteredBySexo
          : e.tamaño.toLowerCase() === "mediano";
      });

      return {
        ...state,
        mascotas: byMediano,
      };
    case "FILTER_BY_TAMAÑO_GRANDE":
      state.filteredByTamaño = "grande";
      const byGrande = state.allMascotas.filter((e) => {
        return state.filteredBySexo
          ? e.tamaño.toLowerCase() === "grande" &&
              e.sexo === state.filteredBySexo
          : e.tamaño.toLowerCase() === "grande";
      });

      return {
        ...state,
        mascotas: byGrande,
      };

    case "FILTER_BY_TODOS_TAMAÑOS":
      state.filteredByTamaño = null;
      const todosTamaños = state.filteredBySexo
        ? state.allMascotas.filter((e) => e.sexo === state.filteredBySexo)
        : state.allMascotas;
      return {
        ...state,
        mascotas: todosTamaños,
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
                    stock: action.payload.stock
                }
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
                        stock: action.payload.stock
                    }
                    state.cart.push(cartShopping2);
                }
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
            return {
                ...state,
                numberCart: state.numberCart + 1
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
    case "REFRESH_CART":
      let cart = [];
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      return {
        ...state,
        numberCart: 1,
        cart: cart,
      };
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

    default:
      return state;
  }
}

export default rootReducer;
