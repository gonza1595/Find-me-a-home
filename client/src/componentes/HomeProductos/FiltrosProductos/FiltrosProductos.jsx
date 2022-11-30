import React from "react";
import { useDispatch } from "react-redux";
import {
  orderByNameProducto,
  filterByTipo,
  orderByPrecio,
} from "../../../redux/actions";
import "./FiltrosProductos.css";

export default function FiltrosProductos({ setPage, setFilterSelected }) {
  const dispatch = useDispatch();

  function handleOrderByName(e) {
    dispatch(orderByNameProducto(e.target.value));
    setPage(1);
    setFilterSelected(e.target.value);
  }

  function handleFilterByType(e) {
    dispatch(filterByTipo(e.target.value));
    setFilterSelected(e.target.value);
    setPage(1);
  }

  function handleOrderByPrecio(e) {
    dispatch(orderByPrecio(e.target.value));
    setFilterSelected(e.target.value);
    setPage(1);
  }

  return (
    <div className="filterProductoHome">
      <select
        onChange={(e) => handleFilterByType(e)}
        defaultValue="Filtrar por tipo"
        className="filtersSelectProductoHome"
      >
        <option disabled>Filtrar por tipo</option>
        <option value="all">Todos los tipos</option>
        <option value="paseo">Paseo</option>
        <option value="alimentación">Alimentacion</option>
        <option value="juguetes">Juguetes</option>
      </select>

      <select
        onChange={(e) => handleOrderByName(e)}
        defaultValue="Ordenar Alfabeticamente"
        className="filtersSelectProductoHome"
      >
        <option disabled>Ordenar Alfabeticamente</option>
        <option value="asc">A-Z</option>
        <option value="des">Z-A</option>
      </select>

      <select
        onChange={(e) => handleOrderByPrecio(e)}
        defaultValue="Ordenar por Precio"
        className="filtersSelectProductoHome"
      >
        <option disabled>Ordenar por Precio</option>
        <option value="max">Mayor Precio</option>
        <option value="min">Menor Precio</option>
      </select>
    </div>
  );
}
