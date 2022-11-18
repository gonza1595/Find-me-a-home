import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  adminActualizarMascota,
  adminBorrarMascota,
  traerMascotas,
} from "../../../redux/actions";
import FormMascota from "../../Formulario/FormMascota";
import "../ListaMascotas/ListaMascotas.css";
import SearchBarMascotas from "../../SearchBar/SearchBarMascota";

function TablaMascotas() {
  const dispatch = useDispatch();
  const mascotas = useSelector((state) => state.mascotas);

  useEffect(() => {
    dispatch(traerMascotas());
  }, []);

  // Esta incompleto, aca abajo deberia agregarse funciones (EJ: eliminar, actualizar)

  const handleDelete = (id) => {
    dispatch(adminBorrarMascota(id));
  };

  return (
    <div className="container_tabla_dash">
      <h2>MASCOTAS</h2>
      <div className="searchBarDashboard">
        <SearchBarMascotas />
      </div>
      <table className="tabla-mascotas">
        <thead className="theadMasctotas">
          <tr className="nombres-columnas">
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Imagen</th>
            <th scope="col">Edad</th>
            <th scope="col">Tamaño</th>
            <th scope="col">Raza</th>
            <th scope="col">Sexo</th>
            <th scope="col">Especie</th>
            <th scope="col">Borrar</th>
            <th scope="col">Editar</th>
          </tr>
        </thead>
        <tbody className="tbodyMascotas">
          {mascotas.map((mascota) => {
            return (
              <tr className="filas">
                <td className="nombretablamascota">{mascota.nombre}</td>
                <td className="descripciontablamascota">
                  {mascota.descripcion}
                </td>
                <td className="imagentablamascota">{mascota.imagen}</td>
                <td className="edadtablamascota">{mascota.edad}</td>
                <td className="tamañotablamascota">{mascota.tamaño}</td>
                <td className="razatablamascota">{mascota.raza}</td>
                <td className="sexotablamascota">{mascota.sexo}</td>
                <td className="especietablamascota">{mascota.especie}</td>
                <td className="borrartablamascota">
                  <button onClick={() => handleDelete(mascota.id)}>
                    Borrar
                  </button>
                </td>
                <td className="actualizartablamascota">
                  <Link to={`/dashboard/formActualizarMascota/${mascota.id}`}>
                    <button>Editar</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TablaMascotas;
