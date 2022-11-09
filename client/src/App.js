import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detalle from "./componentes/DetalleMascotas/Detalle";
import DetalleRefugio from "./componentes/DetalleRefugio/DetalleRefugio";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/mascotas/:id' component= {Detalle}/>
      <Route exact path='/adopta' component= {DetalleRefugio}/>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;