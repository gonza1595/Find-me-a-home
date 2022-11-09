import { createSlice } from "@reduxjs/toolkit";

export const mascotasSlice = createSlice({
    name: "mascotas",

         //Este es el estado inicial 

    initialState: {
        mascotas:[],
        detalle:{},
    },

    reducers:{

                //Acá van las actions que van a modificar el estado
        
        traerMascotas:(state , action)=>{
            state.mascotas = action.payload
        },

        detalleMascotas:(state, action) =>{
            state.detalle = action.payload
        },

        limpiarDetalle:(state)=>{
            state.detalle = {}
        }
    }
})

    //export de acciones para trabajar en componentess

export const { traerMascotas, detalleMascotas, limpiarDetalle } = mascotasSlice.actions

    //export al store

export default mascotasSlice.reducer