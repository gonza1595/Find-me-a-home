import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Detalle from "./componentes/DetalleMascotas/Detalle.jsx";
import home from "./componentes/Home/Home.jsx";
import DetalleRefugio from './componentes/DetalleRefugio/DetalleRefugio';
=======
import home from "./componentes/Home/Home.jsx";
>>>>>>> dcd72fbcf601645629d88f94216ce01b70843838



function App() {


  return (
  
<BrowserRouter>

  <div className="app">

        <Switch>
       
       
        <Route exact path="/" component = {home} />
<<<<<<< HEAD
        <Route exact path='/mascotas/:id' component= {Detalle}/>
      <Route exact path='/adopta' component= {DetalleRefugio}/>
=======
>>>>>>> dcd72fbcf601645629d88f94216ce01b70843838

        
        </Switch>

  </div>

  </BrowserRouter>
  )
}

export default App;