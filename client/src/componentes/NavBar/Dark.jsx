import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Dark.css';


export default function Dark() {

    const [modo, setModo] = useState(localStorage.getItem('modo') || 'light');
    const history = useHistory();

    function handleClick() {
        (modo === 'light') ? setModo('dark') : setModo('light');
        history.push("/")
    }

    useEffect(() => {
    localStorage.setItem('modo', modo);
    document.body.className = modo;
    }, [modo]);

  return (
    <div className='darkContainer'>
        <button className= {`darkButton ${modo}`} onClick={handleClick}>
            <span>🌞</span>
            <span>🌙</span>
        </button>
    </div>

  )
 
}
