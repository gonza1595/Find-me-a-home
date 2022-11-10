import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detalle from "./componentes/DetalleMascotas/Detalle.jsx";
import home from "./componentes/Home/Home.jsx";
import DetalleRefugio from './componentes/DetalleRefugio/DetalleRefugio';
import CardMascotas from "./componentes/CardMascotas/CardMascotas.jsx";
import FormUsuario from "./componentes/Formulario/FormUsuario.jsx";
import FormMascota from "./componentes/Formulario/FormMascota.jsx"

function App() {


  return (
  
<BrowserRouter>

  <div className="app">

        <Switch>
       
       
        <Route exact path="/" component = {home} />
        <Route exact path='/mascotas/:id' component= {Detalle}/>
        <Route exact path='/adopta' component= {DetalleRefugio}/>
        <Route exact path='/contacto' component= {DetalleRefugio}/>
        <Route path='/InciarSesion' component={FormUsuario}/>
        <Route path='/formMascota' component={FormMascota}/>
        </Switch>

  </div>

  </BrowserRouter>
  )
}

export default App;