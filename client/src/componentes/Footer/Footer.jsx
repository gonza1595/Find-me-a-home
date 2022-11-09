import React from 'react';
import {facebook} from './img/facebook'
import {mail} from './img/mail';
import {instagram} from './img/instagram';
import {tel} from './tel';
import {twitter} from './img/twitter';
import {whatsapp} from './img/whatsapp';

export default function Footer(){
    return(
        <footer >
            <div>
                <div>
                <p>CONTACTANOS</p>
                <img src={mail} alt="mail"/>
                <p>findmeahome@gmail.com</p>
                <img src={whatsapp}alt="whatsapp"/>
                <p>11 2699 5890</p>
                <img src={tel} alt="telefono"/>
                <p>011 - 4706 5890</p>
                </div>
    
                <div>
                <a href="https://instagram.com">
                <h1><img src={instagram} alt="instagram"/></h1>
                </a>
                <a href="https://twitter.com">
                    <img src={twitter} alt="twitter"/>
                </a>
                <a href="https://facebook.com">
                    <img src={facebook} alt="facebook"/>
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