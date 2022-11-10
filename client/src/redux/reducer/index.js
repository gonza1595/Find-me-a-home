
const initialState = {
    mascotas : [],
    productos : [],
    detalle : {},
    

    //agregar mas estados si se requiere...
}

function rootReducer(state=initialState, action){

    switch(action.type){
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
              detalle: {}
            }
            default :
            return state;    
    }
}

export default rootReducer;