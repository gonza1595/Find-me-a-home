import React, { useEffect } from "react";
import "./Dashboard.css";
import producto from "./img/productos.png";
import mascota from "./img/mascotas.png";
import user from "./img/user.png";
// import refugio from './img/refugio.png'
import { useDispatch, useSelector } from "react-redux";
import {
  traerMascotas,
  traerProductos,
  traerUsuarios,
} from "../../../redux/actions";
import ListaProductos from "../ListaProductos/ListaProductos";
// import ListaMascotas from '../ListaMascotas/ListaMascotas'
// import ListaUsuarios from '../ListaUsuarios/ListaUsuarios'
// import ListaRefugios from '../ListaRefugios/ListaRefugios'
// import SideBar from './SideBar/SideBar'

export default function Dashboard() {
  const productos = useSelector((state) => state.productos);
  const mascotas = useSelector((state) => state.mascotas);
  const usuarios = useSelector((state) => state.usuarios);
  // const refugios = useSelector((state)=> state.refugios);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(traerProductos());
    dispatch(traerMascotas());
    dispatch(traerUsuarios());
  }, []);

  return (
    <div className="containerDashboard">
      {/* <div className="side_nav_bar">
			<SideBar/>
		</div> */}
      {/* ------------- MAIN ------------- */}
      <main className="containerMain_dash">
        <div className="headerDash">
          <h1>Admin Dashboard</h1>
        </div>
        <div className="cardsDash">
          <div className="card-dash">
            <h2>Productos</h2>
            <div className="img_cant">
              <img src={producto} width="30px" />
              <h4>{productos.length}</h4>
            </div>
          </div>
          <div className="card-dash">
            <h2>Mascotas</h2>
            <div className="img_cant">
              <img src={mascota} width="50px" />
              <h4>{mascotas.length}</h4>
            </div>
          </div>
          <div className="card-dash">
            <h2>Usuarios</h2>
            <div className="img_cant">
              <img src={user} width="30px" />
              <h4>{usuarios.length}</h4>
            </div>
          </div>
          {/* <div className="card-dash">
			        <h2>Refugios</h2>
                    <div className="img_cant">
			            <img src={refugio} width='30px'/>
			            <h4>{refugios.length}</h4>
			        </div>
				</div> */}
        </div>

        {/* -------- PRODUCTOS -----------  */}
        {/* <div className="prodMain_dashb">
				<ListaProductos/>
			</div> */}

        {/* -------- MASCOTAS ----------- */}
        {/* <div key="ListaMascotas" className="mascMain_dashb">
				<ListaMascotas />
		    </div> */}

        {/* -------- USUARIOS ----------- */}
        {/* <div className="userMain_dashb">
				<ListaUsuarios/>
			</div> */}

        {/* -------- REFUGIOS ----------- */}
        {/* <div className="refuMain_dashb">
				<ListaRefugios/>
			</div> */}
      </main>
    </div>
  );
}
