
const initialState = {
    mascotas : [],
    productos : [],
<<<<<<< HEAD
    detalle : [],
=======
    detalle : {},
>>>>>>> dcd72fbcf601645629d88f94216ce01b70843838
    

    //agregar mas estados si se requiere...
}

function rootReducer(state=initialState, action){

    switch(action.type){
<<<<<<< HEAD
        case "BUSCAR_POR_NOMBRE":
            return {
                ...state,
                productos: action.payload,
                mascotas: action.payload

            }

        case "DETALLE_MASCOTA":
            return {
               ...state,
               detalle: action.payload,
            }

        case "LIMPIAR_ESTADO_DETALLE":
            return{
              ...state,
              detalle: []
            }
=======
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
>>>>>>> dcd72fbcf601645629d88f94216ce01b70843838
            default :
            return state;    
    }
}

export default rootReducer;