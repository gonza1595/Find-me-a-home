import React from 'react';

import mail from "../Footer/img/mail.png"
import tel from "../Footer/img/tel.png"
import facebook from "../Footer/img/facebook.png"
import instagram from "../Footer/img/instagram.png"
import twitter from "../Footer/img/twitter.png"
import whatsapp from "../Footer/img/whatsapp.png"

import "./Footer.css"

export default function Footer(){
    return(
        <footer >
            <div className='main-footer'>
                
                <div className='contactanos-info'>
                <div className='contactanos'>
                    <p className='titulo.contacto'>CONTACTANOS</p>
                </div>
                    <div className='conactanos-items'>
                        <img src={mail} alt="mail" width='50px'/> 
                        <a href="mailto:findmeahome@gmail.com">findmeahome@gmail.com</a>
                        
                    </div>
                    <div className='conactanos-items'>
                        <img src={whatsapp}alt="whatsapp" width='50px'/> 
                        <p>11 2699 5890</p>
                    </div>
                    <div className='conactanos-items'>
                        <img src={tel} alt="telefono" width='50px'/>
                        <p>011 - 4706 5890</p>
                    </div>
                </div>
    
                <div className='redes'>
                <a href="https://instagram.com">
                <img src={instagram} alt="instagram" width='50px'/>
                </a>
                <a href="https://twitter.com">
                <img src={twitter} alt="twitter" width='50px'/>
                </a>
                <a href="https://facebook.com">
                <img src={facebook} alt= "img" width='50px'/>
                </a>
                </div>
    
                <section>
                    <form>
                        <p>Subscrirse al newsletter.</p>
                        <p>
                        <input type="text" name="email" placeholder="Ingresa tu mail..."  id="subscribe-field"/>
                        </p>
                        <p>
                        <input type="submit" value="Suscribirse"/>
                        </p>
                    </form>
                </section>
                <div>
                    <p> © All rights reserved 2022</p>
                </div>
            </div>
        
      </footer>
      );
  }