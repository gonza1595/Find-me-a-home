import { React, useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBarProducto.css"
import {buscarPorNombreProducto} from "../../redux/actions"

//searchbar de nombre de productos

export default function SearchBarProducto(){
    const dispatch = useDispatch();

    const [nombre, setNombre] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setNombre(e.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(buscarPorNombreProducto(nombre));
    setNombre('')
  };

    return(
        <form className="search" onSubmit={(event) => handleClick(event)}>
            <div >
                <input
                className="searchTerm"
                type="text"
                placeholder="Buscar producto..."
                onChange={(e) => handleInputChange(e)}
                />
                <button className="searchButton" type="submit">Buscar</button>
            </div>
        </form>
    )
}