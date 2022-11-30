import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBarProducto from "../SearchBar/SearchBarProducto";
import "./HomeProductos.css";
//importar paginado cuando este disponible
import CardProductos from "../CardProductos/CardProductos";
import Pagination from "../Pagination/Pagination.jsx";
import { traerProductos } from "../../redux/actions/index.js";
import Loader from "../Loader/Loader";
import FiltrosProductos from "./FiltrosProductos/FiltrosProductos";

export default function HomeProductos() {
  const dispatch = useDispatch();

  const [filterSelected, setFilterSelected] = useState([]);

  useEffect(() => {
    dispatch(traerProductos());
  }, [dispatch]);

  const modo = localStorage.getItem("modo");

  //FILTROS

  const productos = useSelector((state) => state.productos);

  const productosActivos = productos.filter((e) => e.estado === "activo");

  const [page, setPage] = useState(1);
  const showPerPage = 10;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;
  const showProductos = productosActivos.slice(firstOnPage, lastOnPage);

  function pagination(pageNumber) {
    setPage(pageNumber);
  }

  return (
    <div className={`container_homeProd ${modo}`}>
      <SearchBarProducto />
      <FiltrosProductos
        setFilterSelected={setFilterSelected}
        setPage={setPage}
        showProductos={showProductos}
      />

      <div className={`filters ${modo}`}></div>

      <div className="containerCards">
        {showProductos.length > 0 ? (
          showProductos.map((el) => {
            return (
              <div className="cards">
                <Link to={"/productos/" + el.id}>
                  <CardProductos
                    nombre={el.nombre}
                    tipo={el.tipo}
                    rating={el.rating}
                    imagen={el.imagen}
                    precio={el.precio}
                    key={el.id}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>

      <div className="paginatedDiv">
        <Pagination
          showPerPage={showPerPage}
          mascotasState={productosActivos.length}
          pagination={pagination}
          page={page}
        ></Pagination>
      </div>
    </div>
  );
}
