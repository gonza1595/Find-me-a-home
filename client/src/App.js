import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detalle from "./componentes/DetalleMascotas/Detalle.jsx";
import home from "./componentes/Home/Home.jsx";
import DetalleRefugio from "./componentes/DetalleRefugio/DetalleRefugio";
import FormUsuario from "./componentes/Formulario/FormUsuario.jsx";
import FormMascota from "./componentes/Formulario/FormMascota.jsx";
import DetalleProducto from "../src/componentes/DetalleProducto/DetalleProducto.jsx";
import QuienesSomos from "./componentes/QuienesSomos/QuienesSomos.jsx";
import HomeAdopta from "./componentes/HomeAdopta/HomeAdopta.jsx";
import ReqAdopcion from "./componentes/ReqAdopcion/ReqAdopcion.jsx";
import HomeMascotas from "../src/componentes/HomeMascotas/HomeMascotas";
import SearchBarMascota from "./componentes/SearchBar/SearchBarMascota";
import SearchBarProducto from "./componentes/SearchBar/SearchBarProducto.jsx";
import HomeProductos from "./componentes/HomeProductos/HomeProductos.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/mascotas/:id" component={Detalle} />
          <Route exact path="/adopta" component={DetalleRefugio} />
          <Route exact path="/contacto" component={DetalleRefugio} />
          <Route path="/InciarSesion" component={FormUsuario} />
          <Route path="/formMascota" component={FormMascota} />
          <Route exact path="/homeproductos" component={HomeProductos} />
          <Route exact path="/productos" component={HomeProductos} />
          <Route exact path="/productos/:id" component={DetalleProducto} />
          <Route exact path="/QuienesSomos" component={QuienesSomos} />
          <Route exact path="/adopta" component={HomeAdopta} />
          <Route exact path="/requisitos" component={ReqAdopcion} />
          <Route exact path="/Mascotas" component={HomeMascotas} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
