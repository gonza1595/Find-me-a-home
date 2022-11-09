
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
            default :
            return state;    
    }
}

export default rootReducer;