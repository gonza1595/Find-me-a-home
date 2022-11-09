import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./componentes/Home/Home.jsx";


function App() {


  return (
  
<BrowserRouter>

  <div className="app">

        <Switch>
        
       
        <Route exact path="/" component = {home} />

        
        </Switch>

  </div>

  </BrowserRouter>
  )
}

export default App;
