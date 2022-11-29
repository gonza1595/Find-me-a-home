import React from "react";
import mail from "../Footer/img/mail.png";
import facebook from "../Footer/img/facebook.png";
import instagram from "../Footer/img/instagram.png";
import twitter from "../Footer/img/twitter.png";
import whatsapp from "../Footer/img/whatsapp.png";
import "./Footer.css";

export default function Footer() {

const modo = localStorage.getItem('modo');

  return (
    <footer>
      <div className={`main-footer ${modo}`}>
        <div className="contactanos-info">
          <div className="contactanos">
            <p className="titulo.contacto">CONTACTANOS</p>
          </div>
          <div className="contactanos-items">
            <img src={mail} alt="mail" width="25px" height='25px' />
            <a href="mailto:findmeahome@gmail.com">findmeahome@gmail.com</a>
          </div>
          <div className="wsp_item">
            <img src={whatsapp} alt="whatsapp" width="25px" height='25px'/>
            <p>11 2699 5890</p>
          </div>
        </div>

        <div className="redes">
          <a href="https://instagram.com">
            <img src={instagram} alt="instagram" width="25px" />
          </a>
          <a href="https://twitter.com">
            <img src={twitter} alt="twitter" width="25px" />
          </a>
          <a href="https://facebook.com">
            <img src={facebook} alt="img" width="25px" />
          </a>
        </div>
        <div>
          <p> © All rights reserved 2022</p>
        </div>
      </div>
    </footer>
  );
}
