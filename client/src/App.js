import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./componentes/Home/Home.jsx";
import Form from "./componentes/Formulario/Form.jsx"



function App() {


  return (
  
<BrowserRouter>

  <div className="app">

        <Switch>
       
       
        <Route exact path="/" component = {home} />
        <Route exact path="/form" component = {Form} />

        
        </Switch>

  </div>

  </BrowserRouter>
  )
}

export default App;
