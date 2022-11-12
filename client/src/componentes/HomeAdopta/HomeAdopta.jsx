import React from "react";
import Footer from "../Footer/Footer.jsx"
import "./HomeAdopta.css"

import pets from "../HomeAdopta/img/pets.png"


export default function HomeAdopta() {

    return(

        <div className="main">
        
            <div className="div1">
                
            </div>  

            <div className="div2">
                <h1>Conocé a tu próximo compañero de vida</h1>
                <img className="pet" src={pets} alt= "img" width='400px'/>
        
            </div>

           {/*  <div className="div4"> 
                <img src={pets} alt= "img" width='200px'/>
            </div> */}

            <div className="div3">
                <button>PERROS</button>
                <button>GATOS</button>
            </div>
        
        
        
            

        
        
        <div className="div-6-footer">
            <Footer/>
        </div>
        </div>
        
            )
            
        }