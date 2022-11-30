import React from 'react';
import './QuienesSomos.css'
import img from '../../assets/img/quienes-somos.jpg'

const QuienesSomos = () => {

  const modo = localStorage.getItem('modo');

    return (
        <div>
            <div className={`contenedor ${modo}`}>
                <div className="foto-contenedor">
                    <img src={img} alt="img not found" width='600px' height='auto' />
                </div>
                <div className={`parrafo-contenedor ${modo}`}>
                    <p>
                    Somos una organización que se propone unir a personas con animales rescatados que necesitan amor y cuidado.
                        Desde nuestro lugar queremos concientizar a la sociedad a respetar la vida de los animales y su bienestar.
                        Nuestros pilares son: el cuidado adecuado y el no abandono de las mascotas y la adopción en lugar de la compra de animales.
                    </p>
                </div>
            </div>
        </div>
    )        
}

export default QuienesSomos
