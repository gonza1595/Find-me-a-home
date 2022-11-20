import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./componentes/Dashboard/Dashboard/Dashboard.jsx";
import SideBar from './componentes/Dashboard/Dashboard/SideBar/SideBar.jsx';
import TablaMascotas from './componentes/Dashboard/ListaMascotas/ListaMascotas.jsx';
import TablaProductos from './componentes/Dashboard/ListaProductos/ListaProductos.jsx';
// import ListaRefugios from './componentes/Dashboard/ListaRefugios/ListaRefugios.jsx';
import ListaUsuarios from './componentes/Dashboard/ListaUsuarios/ListaUsuarios.jsx';
import FormProducto from "./componentes/Formulario/FormProductos";
import EditarUsuario from "./componentes/Dashboard/ListaUsuarios/EditarUsuario";
import FormActualizarMascota from "./componentes/Formulario/FormActualizarMascota";
import FormActualizarProducto from "./componentes/Formulario/FormActualizarProductos";

export default function () {
  return (
    <BrowserRouter>
    <SideBar /> 
      <div className="app">
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/productos" component={TablaProductos} />
          <Route exact path="/dashboard/mascotas" component={TablaMascotas} />
          <Route exact path="/dashboard/usuarios" component={ListaUsuarios} />
          {/* <Route exact path="/dashboard/refugios" component={ListaRefugios} /> */}
          <Route
            exact
            path="/dashboard/formActualizarMascota/:id"
            component={FormActualizarMascota}
          />

          <Route
            exact
            path="/dashboard/editarUsuario/:id"
            component={EditarUsuario}
          />
          <Route
            exact
            path="/dashboard/formActualizarProducto/:id"
            component={FormActualizarProducto}
          />
          <Route
            exact
            path="/dashboard/formProducto"
            component={FormProducto}
          />
        </Switch> 
      </div>
    </BrowserRouter>
  )
}
