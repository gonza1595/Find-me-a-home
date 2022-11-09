
const initialState = {
    mascotas : [],
    productos : [],
    detalle : {},
    usuario: [],
    

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
            default :
            return state;    
    }
}

export default rootReducer;