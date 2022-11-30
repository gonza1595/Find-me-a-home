import { React, useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBarMascota.css"
import {buscarPorNombreMascota} from "../../redux/actions"

//searchbar de nombre de mascotas 

export default function SearchBar(){
    const dispatch = useDispatch();

    const [nombre, setNombre] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setNombre(e.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(buscarPorNombreMascota(nombre));
    setNombre('')
  };
  console.log(nombre)

    return(
        <form className="search" onSubmit={(event) => handleClick(event)}>
            <div >
                <input
                className="searchTerm"
                type="text"
                placeholder="Buscar mascota..."
                onChange={(e) => handleInputChange(e)}
                />
                <button className="searchButton" type="submit">Buscar</button>
            </div>
        </form>
    )
}