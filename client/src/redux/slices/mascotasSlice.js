import { createSlice } from "@reduxjs/toolkit";

export const mascotasSlice = createSlice({
    name: "mascotas",

         //Este es el estado inicial 

    initialState: {
        mascotas:[],
    },

    reducers:{

                //Acá van las actions que van a modificar el estado
        
        traerMascotas:(state , action)=>{
            state.mascotas = action.payload
        }
    }
})

export const { traerMascotas } = mascotasSlice.actions

export default mascotasSlice.reducer