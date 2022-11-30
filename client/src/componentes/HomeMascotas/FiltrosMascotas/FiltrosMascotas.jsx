import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  filterByPerro,
  filterByGato,
  filterByTodasEspecies,
  filterByTamañoPequeño,
  filterByTamañoMediano,
  filterByTamañoGrande,
  filterByTodosTamaños,
  filterBySexoMasculino,
  filterBySexoFemenino,
  filterByAmbosSexos,
  orderByNameAsc,
  orderByNameDes,
  orderByEdad,
} from "../../../redux/actions";

export default function FiltrosMascotas({ setPage, setFilterSelected }) {
  const dispatch = useDispatch();

  const modo = localStorage.getItem('modo');

  function handleFilterByEspecie(e) {
    if (e.target.value === "perro") {
      e.preventDefault();
      dispatch(filterByPerro(e.target.value));
      setPage(1);
      setFilterSelected(e.target.value);
    } else if (e.target.value === "gato") {
      e.preventDefault();
      dispatch(filterByGato(e.target.value));
      setPage(1);
      setFilterSelected(e.target.value);
    } else if (e.target.value === "all") {
      e.preventDefault(e);
      dispatch(filterByTodasEspecies(e.target.value));
      setPage(1);
      setFilterSelected(e.target.value);
    }
  }

  function handleFilterBySexo(e) {
    if (e.target.value === "masc") {
      e.preventDefault();
      dispatch(filterBySexoMasculino(e.target.value));
      setPage(1);
      setFilterSelected(e.target.value);
    } else if (e.target.value === "fem") {
      e.preventDefault();
      dispatch(filterBySexoFemenino(e.target.value));
      setPage(1);
      setFilterSelected(e.target.value);
    } else if (e.target.value === "all") {
      e.preventDefault();
      dispatch(filterByAmbosSexos(e.target.value));
      setPage(1);
      setFilterSelected(e.target.value);
    }
  }

  function handleFilterByTamaño(e) {
    if (e.target.value === "peque") {
      e.preventDefault();
      dispatch(filterByTamañoPequeño(e.target.value));
      setPage(1);
      setFilterSelected(e.target.value);
    } else if (e.target.value === "media") {
      e.preventDefault();
      dispatch(filterByTamañoMediano(e.target.value));
      setPage(1);
      setFilterSelected(e.target.value);
    } else if (e.target.value === "grande") {
      e.preventDefault();
      dispatch(filterByTamañoGrande(e.target.value));
      setPage(1);
      setFilterSelected(e.target.value);
    } else if (e.target.value === "all") {
      e.preventDefault();
      dispatch(filterByTodosTamaños(e.target.value));
      setPage(1);
      setFilterSelected(e.target.value);
    }
  }

  function handleOrderByName(e) {
    if (e.target.value === "asc") {
      dispatch(orderByNameAsc(e.target.value));
      setPage(1);
      setFilterSelected(e.target.value);
    } else if (e.target.value === "des") {
      dispatch(orderByNameDes(e.target.value));
      setPage(1);
      setFilterSelected(e.target.value);
    }
  }

  function handleOrderByEdad(e) {
    dispatch(orderByEdad(e.target.value));
    setPage(1);
    setFilterSelected(e.target.value);
  }

  return (
    <div className={`filters ${modo}`}>
      <select
        onChange={(e) => handleFilterByEspecie(e)}
        defaultValue="Filtrar por especie"
      >
        <option disabled>Filtrar por especie</option>
        <option value="all">Todas las especies</option>
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
      </select>

      <select
        onChange={(e) => handleFilterBySexo(e)}
        defaultValue="Filtrar por sexo"
      >
        <option disabled>Filtrar por sexo</option>
        <option value="all">Ambos sexos</option>
        <option value="masc">Masculino</option>
        <option value="fem">Femenino</option>
      </select>

      <select
        onChange={(e) => handleFilterByTamaño(e)}
        defaultValue="Filtrar por tamaño"
      >
        <option disabled>Filtrar por tamaño</option>
        <option value="all">Todos los tamaños</option>
        <option value="peque">Pequeño</option>
        <option value="media">Mediano</option>
        <option value="grande">Grande</option>
      </select>

      <select
        onChange={(e) => handleOrderByName(e)}
        defaultValue="Ordenar por nombre"
      >
        <option disabled>Ordenar por nombre</option>
        <option value="asc">A-Z</option>
        <option value="des">Z-A</option>
      </select>

      <select
        onChange={(e) => handleOrderByEdad(e)}
        defaultValue="Ordenar por edad"
      >
        <option disabled>Ordenar por Edad</option>
        <option value="max">Mayor Edad</option>
        <option value="min">Menor Edad</option>
      </select>
    </div>
  );
}
