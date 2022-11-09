import { React, useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBar.css"

export default function SearchBar(){
    const dispatch = useDispatch();

    const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }


  const handleClick = (event) => {
    event.preventDefault();
    dispatch((name));
    setName('')
  };

    return(
        <form className="search" onSubmit={(event) => handleClick(event)}>
            <div >
                <input
                className="searchTerm"
                type="text"
                placeholder="Buscar..."
                onChange={(e) => handleInputChange(e)}
                />
                <button className="searchButton" type="submit">Search</button>
            </div>
        </form>
    )
}