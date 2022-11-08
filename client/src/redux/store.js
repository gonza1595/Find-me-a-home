import { configureStore } from "@reduxjs/toolkit";
import usuarios from "./slices/usuariosSlice";
import productos from "./slices/productosSlice";
import mascotas from "./slices/mascotasSlice";

export default configureStore({
  reducer:{

      usuarios: usuarios,
      productos: productos,
      mascotas: mascotas,

  }
})