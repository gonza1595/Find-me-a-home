import React, { useEffect, useState } from 'react';
import './Dark.css';


export default function Dark() {

    const [modo, setModo] = useState(localStorage.getItem('modo') || 'light');

    function refreshPage() {
      window.location.reload();
    }

    function handleClick() {
        (modo === 'light') ? setModo('dark') : setModo('light');
        refreshPage()
    }

    useEffect(() => {
    localStorage.setItem('modo', modo);
    document.body.className = modo;
    }, [modo]);

  return (
    <div className='darkContainer'>
        <button className= {`darkButton ${modo}`} onClick={handleClick}>
            <span>🌙</span>
            <span>🌞</span>
        </button>
    </div>

  )
 
}
