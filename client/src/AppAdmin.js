import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./componentes/Dashboard/Dashboard/Dashboard.jsx";
import SideBar from './componentes/Dashboard/Dashboard/SideBar/SideBar.jsx';
import TablaMascotas from './componentes/Dashboard/ListaMascotas/ListaMascotas.jsx';
import TablaProductos from './componentes/Dashboard/ListaProductos/ListaProductos.jsx';
// import ListaRefugios from './componentes/Dashboard/ListaRefugios/ListaRefugios.jsx';
import ListaUsuarios from './componentes/Dashboard/ListaUsuarios/ListaUsuarios.jsx';


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
        </Switch> 
      </div>
    </BrowserRouter>
  )
}
