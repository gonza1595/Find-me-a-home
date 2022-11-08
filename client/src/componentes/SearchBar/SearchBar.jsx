import { React, useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchBar(){
    const dispatch = useDispatch();

    return(
        <form>
            <div>
                <input
                className=""
                type="text"
                
                />
                <button type="submit"></button>
            </div>
        </form>
    )
}