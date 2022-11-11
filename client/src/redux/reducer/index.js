const initialState = {
  mascotas: [],
  allMascotas: [],
  productos: [],
  detalle: {},
  usuarios: [],

  //agregar mas estados si se requiere...
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "TRAER_MASCOTAS":
      return {
        ...state,
        mascotas: action.payload,
        allMascotas: action.payload,
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

    case "LIMPIAR_ESTADO_DETALLE":
      return {
        ...state,
        detalle: {},
      };

    case "TRAER_PRODUCTOS":
      return {
        ...state,
        productos: action.payload,
      };

    case "FILTER_BY_SEXO":
      const bySexo =
        action.payload === "masc"
          ? state.allMascotas.filter(
              (e) => e.sexo.toLowerCase() === "masculino"
            )
          : state.allMascotas.filter(
              (e) => e.sexo.toLowerCase() === "femenino"
            );
      return {
        ...state,
        mascotas: bySexo,
      };

    case "FILTER_BY_TAMAÑO_PEQUEÑO":
      const byPequeño =
        action.payload === "peque"
          ? state.mascotas.filter((e) => e.tamaño.toLowerCase() === "pequeño")
          : null;
      return {
        ...state,
        mascotas: byPequeño,
      };

    case "FILTER_BY_TAMAÑO_MEDIANO":
      const byMediano =
        action.payload === "media"
          ? state.allMascotas.filter(
              (e) => e.tamaño.toLowerCase() === "mediano"
            )
          : null;
      return {
        ...state,
        mascotas: byMediano,
      };
    case "FILTER_BY_TAMAÑO_GRANDE":
      const byGrande =
        action.payload === "grande"
          ? state.allMascotas.filter((e) => e.tamaño.toLowerCase() === "grande")
          : null;
      return {
        ...state,
        mascotas: byGrande,
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

    default:
      return state;
  }
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
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

    case "LIMPIAR_ESTADO_DETALLE":
      return {
        ...state,
        detalle: {},
      };

    case "TRAER_PRODUCTOS":
      return {
        ...state,
        productos: action.payload,
      };

    case "DETALLE_PRODUCTO":
      return {
        ...state,
        detalle: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
