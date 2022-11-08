import { createSlice } from "@reduxjs/toolkit";

export const productosSlice = createSlice({
    name: "productos",

        //Este es el estado inicial 

    initialState: {
        productos:[],
    },

    reducers:{

        //Acá van las actions que van a modificar el estado
        
        traerProductos:(state , action)=>{
            state.productos = action.payload
        }
    }
})

//export de acciones para trabajar en componentes

export const { traerProductos } = productosSlice.actions

 //export al store

export default productosSlice.reducer