import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { traerDonaciones } from "../../../redux/actions";

function Donaciones() {
  const dispatch = useDispatch();
  const donaciones = useSelector((state) => state.donaciones);

  useEffect(() => {
    dispatch(traerDonaciones());
  }, [dispatch]);

  return (
    <div className="container_tabla_dash">
      <h2>DONACIONES</h2>
      <table className="tabla-productos">
        <thead>
          <tr className="tabla-head">
            <th scope="col">N° de donacion</th>
            <th scope="col">Fecha</th>
            <th scope="col">Usuario</th>
            <th scope="col">Refugio</th>
            <th scope="col">Monto</th>
          </tr>
        </thead>
        <tbody>
          {donaciones.map((donacion) => {
            return (
              <tr>
                <td>{donacion.id}</td>
                <td>{donacion.fecha}</td>
                <td>{donacion.userID}</td>
                <td>{donacion.refugio}</td>
                <td>$ {donacion.montoTotal}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Donaciones;
