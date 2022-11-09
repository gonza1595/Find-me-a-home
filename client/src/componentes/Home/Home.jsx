import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Home.css"

export default function home (){

    return(


<div class="parent">

<div class="div1">

<NavBar/>

</div>


<div class="div2"> La felicidad no se compra, se adopta. </div>
<div class="div3"> <img src=""/> img </div>
    <div class="div4">

        <p>Antes de adoptar debés saber la gran responsabilidad que implica tener un animal en nuestro hogar.
            Por eso, te sugerimos que tengas en cuenta los siguientes aspectos.
        </p>

        <div className="subdiv4">

        <h2>TU TIEMPO</h2>
        <h2>TU ESPACIO</h2>
        <h2>TU PACIENCIA</h2>
        <h2>TU DINERO</h2>
        <h2>TU FAMILIA</h2>

        </div>

    </div>

<div class="div5">

    <h1>Podés hacer mucho para ayudarnos</h1>

<button>Doná productos o dinero a nuestros refugios</button>
<button>Conocé a nuestras mascotas</button>

</div>
</div>

    )
    
}




    


