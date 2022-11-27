import React from "react";
import { useDispatch } from "react-redux";
import {
  orderByNameUsuario,
  filterByRango,
} from "../../../redux/actions/index";

export default function FiltroUsuarios({ setPage, setFilterSelected }) {
  const dispatch = useDispatch();

  function handleorderByNameUsuario(e) {
    dispatch(orderByNameUsuario(e.target.value));
    setPage(1);
    setFilterSelected(e.target.value);
  }

  function handleFilterByRango(e) {
    dispatch(filterByRango(e.target.value));
    setPage(1);
    setFilterSelected(e.target.value);
  }

  return (
    <div className="filters">
      <select
        onChange={(e) => handleorderByNameUsuario(e)}
        defaultValue="Ordenar Alfabeticamente"
      >
        <option disabled>Ordenar Alfabeticamente</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <select
        onChange={(e) => handleFilterByRango(e)}
        defaultValue="Filtrar por Rango"
      >
        <option disabled>Filtrar por Rango</option>
        <option value="all">Todos los rangos</option>
        <option value="usuario">Usuario</option>
        <option value="refugio">Refugio</option>
      </select>
    </div>
  );
}
