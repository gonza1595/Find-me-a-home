
const initialState = {
    mascotas : [],
    productos : [],
    detalle : {},
    

    //agregar mas estados si se requiere...
}

function rootReducer(state=initialState, action){

    switch(action.type){
        case "BUSCAR_POR_NOMBRE_MASCOTA":
            return {
                ...state,
                mascotas: action.payload
            }
            case "BUSCAR_POR_NOMBRE_PRODUCTO":
                return{
                    ...state,
                    productos: action.payload
                }

        case "DETALLE_MASCOTA":
            return {
               ...state,
               detalle: action.payload,
            }

        case "LIMPIAR_ESTADO_DETALLE":
            return{
              ...state,
              detalle: {}
            }

        case "TRAER_PRODUCTOS":
            return {
                ...state,
                productos: action.payload,
    
            }

        case "DETALLE_PRODUCTO":
            return {
                ...state,
                detalle: action.payload,
            }
        default :
        return state;    
    }
}

export default rootReducer;