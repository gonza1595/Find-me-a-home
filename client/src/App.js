import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Detalle from './componentes/DetalleMascotas/Detalle.jsx';
import home from './componentes/Home/Home.jsx';
import DetalleRefugio from './componentes/DetalleRefugio/DetalleRefugio';
import FormUsuario from './componentes/Formulario/FormUsuario.jsx';
import FormMascota from './componentes/Formulario/FormMascota.jsx';
import DetalleProducto from '../src/componentes/DetalleProducto/DetalleProducto.jsx';
import QuienesSomos from './componentes/QuienesSomos/QuienesSomos.jsx';
import HomeAdopta from './componentes/HomeAdopta/HomeAdopta.jsx';
import ReqAdopcion from './componentes/ReqAdopcion/ReqAdopcion.jsx';
import HomeMascotas from '../src/componentes/HomeMascotas/HomeMascotas';
import HomeProductos from './componentes/HomeProductos/HomeProductos.jsx';
import NavBar from './componentes/NavBar/NavBar.jsx';
import FormInicioSesion from './componentes/Formulario/FormInicioSesion';
import FormAdopcion from './componentes/Formulario/FormAdopcion.jsx';
import FormPago from './componentes/Formulario/FormPago';
import Cart from './componentes/Carrito/Cart.jsx';

import Dashboard from './componentes/Dashboard/Dashboard/Dashboard.jsx';
import SideBar from './componentes/Dashboard/Dashboard/SideBar/SideBar.jsx';
import TablaMascotas from './componentes/Dashboard/ListaMascotas/ListaMascotas.jsx';
import TablaProductos from './componentes/Dashboard/ListaProductos/ListaProductos.jsx';
// // import ListaRefugios from './componentes/Dashboard/ListaRefugios/ListaRefugios.jsx';
import ListaUsuarios from './componentes/Dashboard/ListaUsuarios/ListaUsuarios.jsx';
import FormProducto from './componentes/Formulario/FormProductos';
import EditarUsuario from './componentes/Dashboard/ListaUsuarios/EditarUsuario';
import FormActualizarMascota from './componentes/Formulario/FormActualizarMascota';
import FormActualizarProducto from './componentes/Formulario/FormActualizarProductos';

function App() {
	return (
		<>
			<div className='app'>
				<Route exact path='/' component={NavBar} />
				<Route exact path='/' component={home} />

				<Route path='/mascotas/:id' component={NavBar} />
				<Route exact path='/mascotas/:id' component={Detalle} />

				<Route path='/contacto' component={NavBar} />
				<Route exact path='/contacto' component={DetalleRefugio} />

				<Route path='/iniciarSesion' component={NavBar} />
				<Route exact path='/iniciarSesion' component={FormInicioSesion} />

				<Route path='/formMascota' component={NavBar} />
				<Route exact path='/formMascota' component={FormMascota} />

				<Route path='/registrate' component={NavBar} />
				<Route exact path='/registrate' component={FormUsuario} />

				<Route path='/productos' component={NavBar} />
				<Route exact path='/productos' component={HomeProductos} />

				<Route exact path='/productos/:id' component={DetalleProducto} />

				<Route path='/QuienesSomos' component={NavBar} />
				<Route exact path='/QuienesSomos' component={QuienesSomos} />

				<Route path='/adopta' component={NavBar} />
				<Route exact path='/adopta' component={HomeAdopta} />

				<Route path='/requisitos' component={NavBar} />
				<Route exact path='/requisitos' component={ReqAdopcion} />

				<Route path='/mascotas' component={NavBar} />
				<Route exact path='/mascotas' component={HomeMascotas} />

				<Route path='/formAdopcion' component={NavBar} />
				<Route exact path='/formAdopcion' component={FormAdopcion} />

				<Route path='/pagos' component={NavBar} />
				<Route exact path='/pagos' component={FormPago} />

				<Route path={'/carrito'} component={NavBar} />
				<Route exact path={'/carrito'} component={Cart} />

				<Route path='/dashboard' component={SideBar} />
				<Route exact path='/dashboard' component={Dashboard} />

				<Route exact path='/dashboard/productos' component={TablaProductos} />

				<Route exact path='/dashboard/mascotas' component={TablaMascotas} />

				<Route exact path='/dashboard/usuarios' component={ListaUsuarios} />

				<Route
					exact
					path='/dashboard/formActualizarMascota/:id'
					component={FormActualizarMascota}
				/>

				<Route
					exact
					path='/dashboard/editarUsuario/:id'
					component={EditarUsuario}
				/>

				<Route
					exact
					path='/dashboard/formActualizarProducto/:id'
					component={FormActualizarProducto}
				/>
				<Route exact path='/dashboard/formProducto' component={FormProducto} />
			</div>
		</>
	);
}

export default App;
