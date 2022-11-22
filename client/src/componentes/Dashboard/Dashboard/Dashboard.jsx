import React, { useEffect } from "react";
import "./Dashboard.css";
import producto from "./img/productos.png";
import mascota from "./img/mascotas.png";
import user from "./img/user.png";
// import refugio from './img/refugio.png'
import { useDispatch, useSelector } from "react-redux";
import { traerMascotas, traerProductos, traerUsuarios} from "../../../redux/actions";
import GraficoMascotas from "./Graficos/GraficoMascotas";
import GraficoProductos from "./Graficos/GraficoProductos";
import GraficoUsers from "./Graficos/GraficoUsers";
// import ListaProductos from "../ListaProductos/ListaProductos";
// import ListaMascotas from '../ListaMascotas/ListaMascotas'
// import ListaUsuarios from '../ListaUsuarios/ListaUsuarios'
// import ListaRefugios from '../ListaRefugios/ListaRefugios'

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

        <div className="grafUser">

        <div className="graficosDash">
          <GraficoMascotas />
          <GraficoProductos />
          <GraficoUsers />
        </div>

        <div className="ultimos">
          <h4>ULTIMOS USUARIOS REGISTRADOS</h4>

        { usuarios.slice(-3).map((e)=>(
          <div className="listaUs">
            <br />
            <p>Nombre: {e.nombre}</p>
            <p>Correo: {e.correo}</p>
            <p>Rango: {e.rango}</p>
            <br />
          </div>
            ))}
        </div>
        </div>
      </main>
    </div>
  );
}
