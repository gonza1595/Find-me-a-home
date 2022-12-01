import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { traerOrdenes } from "../../../redux/actions";
import Dark from "../../NavBar/Dark";
import './Ventas.css'

function Ventas() {
  const dispatch = useDispatch();
  const modo = localStorage.getItem('modo');

  const ventas = useSelector((state) => state.traerOrdenes);
  const ver = ventas.map((e) => e.productos.map((e) => e.cantidad));
  console.log(ventas);

  useEffect(() => {
    dispatch(traerOrdenes());
  }, [dispatch]);

  return (
    <div className={`container_tabla_dash ${modo}`}>
        <div className="darkMode">
          <Dark />
        </div>
      <h2>VENTAS</h2>
      <table className={`tabla-productos ${modo}`}>
        <thead>
          <tr className="tabla-head">
            <th scope="col">N° venta</th>
            <th scope="col">Fecha</th>
            <th scope="col">Usuario</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Descripción</th>
            <th scope="col">P. Unitario</th>
            <th scope="col">Importe Total</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((orden) => {
            return (
              <tr>
                <td>{orden.id}</td>
                <td>{orden.fecha}</td>
                <td>{orden.userID}</td>
                <td>
                  {orden.productos.map((producto) => {
                    return <li>{producto.cantidad}</li>;
                  })}
                </td>
                <td>
                  {orden.productos.map((producto) => {
                    return <li>{producto.nombre}</li>;
                  })}
                </td>
                <td>
                  {orden.productos.map((producto) => {
                    return <li>$ {producto.precio}</li>;
                  })}
                </td>
                <td>$ {orden.montoTotal}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Ventas;
