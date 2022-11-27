import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { formularioPostAdopcion } from "../../redux/actions/index"; 
import "./FormAdopcion.css"; 

function validate(input) {
  let errors = {};

  if (!input.nombreMascota) {
    errors.nombre = "Se requiere un nombre";
  } else if (!input.adoptarOtro) {
    errors.adoptarOtro = "Se requiere una respuesta";
  } else if (!input.adoptarParaQuien) {
    errors.imagen = "Se requiere una respuesta";
  } else if (!input.convivientesYedades) {
    errors.convivientesYedades = "Se requiere una respuesta";
  } else if (!input.comunAcuerdo) {
    errors.comunAcuerdo = "Se requiere una respuesta";
  } else if (!input.hayMascotas) {
    errors.hayMascotas = "Se requiere una respuesta";
  } else if (!input.hayMascotasDetalle) {
    errors.hayMascotasDetalle = "Se requiere una respuesta";
  } else if (!input.mascotasAnteriores) {
    errors.mascotasAnteriores = "Se requiere una respuesta";
  } else if (!input.vacaciones) {
    errors.vacaciones = "Se requiere una respuesta";
  } else if (!input.gastos) {
    errors.gastos = "Se requiere una respuesta";
  } else if (!input.vivienda) {
    errors.vivienda = "Se requiere una respuesta";
  } else if (!input.propietarioOalquila) {
    errors.propietarioOalquila = "Se requiere una respuesta";
  } else if (!input.mudanza) {
    errors.mudanza = "Se requiere una respuesta";
  } else if (!input.espaciosSeguros) {
    errors.espaciosSeguros = "Se requiere una respuesta";
  } else if (!input.tipoDeCompañia) {
    errors.tipoDeCompañia = "Se requiere una respuesta";
  } else if (!input.mascotaSola) {
    errors.mascotaSola = "Se requiere una respuesta";
  } else if (!input.mascotaPaseos) {
    errors.mascotaPaseos = "Se requiere una respuesta";
  } else if (!input.adaptacion) {
    errors.adaptacion = "Se requiere una respuesta";
  } else if (!input.problemaComportamiento) {
    errors.problemaComportamiento = "Se requiere una respuesta";
  } else if (!input.caractertisticasAdoptado) {
    errors.caractertisticasAdoptado = "Se requiere una respuesta";
  } else if (!input.contactoNombreApe) {
    errors.contactoNombreApe = "Se requiere una respuesta";
  } else if (!input.contactoZona) {
    errors.contactoZona = "Se requiere una respuesta";
  } else if (!input.contactoDireccion) {
    errors.contactoDireccion = "Se requiere una respuesta";
  } else if (!input.contactoOcupacion) {
    errors.contactoOcupacion = "Se requiere una respuesta";
  } else if (!input.contactoMail) {
    errors.contactoMail = "Se requiere una respuesta";
  } else if (!input.contactoEdad) {
    errors.contactoEdad = "Se requiere una respuesta";
  } else if (!input.contactoTelFijo) {
    errors.contactoTelFijo = "Se requiere una respuesta";
  } else if (!input.contactoCelular) {
    errors.contactoCelular = "Se requiere una respuesta";
  } 
  return errors;
}

export default function FormAdopcion() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
  
    const [errors, setErrors] = useState({});
  
    // Inputs
    const [input, setInput] = useState({
      nombreMascota: "",
      adoptarOtro: "",
      adoptarParaQuien: "",
      convivientesYedades: "",
      comunAcuerdo: "",
      hayMascotas: "",
      hayMascotasDetalle: "",
      mascotasAnteriores: "",
      vacaciones: "",
      gastos: "",
      vivienda: "",
      propietarioOalquila: "",
      mudanza: "",
      espaciosSeguros: "",
      tipoDeCompañia: "",
      mascotaSola: "",    
      mascotaPaseos: "",
      adaptacion: "",
      problemaComportamiento: "",
      caractertisticasAdoptado: "",
      cachorroMotivos: "",
      chachorroCuidados: "",
      chachorroAtencion: "",
      chachorroCastrar: "",
      cachorroCrecimiento: "",
      contactoNombreApe: "",
      contactoZona: "",
      contactoDireccion: "",
      contactoOcupacion: "",
      contactoMail: "",
      contactoEdad: "",
      contactoTelFijo: "",
      contactoCelular: "",
    });

    function handleChange(e) {
        e.preventDefault();
        console.log(input);
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors(
          validate({
            ...input,
            [e.target.name]: [e.target.value],
          })
        );
      }

    function handleCheck(e) {
        if (e.target.checked) {
          setInput({
            ...input,
            [e.target.name]: e.target.value,
          });
        }
        setErrors(
          validate({
            ...input,
            [e.target.name]: e.target.value,
          })
        );
    }

    function handleSubmit(e) {
        if ( !input.nombreMascota || !input.adoptarOtro || !input.adoptarParaQuien || !input.convivientesYedades || !input.comunAcuerdo|| !input.hayMascotas || !input.hayMascotasDetalle || !input.mascotasAnteriores) {
          e.preventDefault();
          alert("Verifique los campos para poder continuar");
        } else {
          e.preventDefault();
          dispatch(formularioPostAdopcion(input,id)); // check esto
          alert("Su formulario ha sido enviado exitosamente. Nos comunicaremos con usted tan pronto como sea posible");
          history.push("/contacto"); //fijarse si se deja o no

        
    
          setInput({
            nombreMascota: "",
            adoptarOtro: "",
            adoptarParaQuien: "",
            convivientesYedades: "",
            comunAcuerdo: "",
            hayMascotas: "",
            hayMascotasDetalle: "",
            mascotasAnteriores: "",
            vacaciones: "",
            gastos: "",
            vivienda: "",
            propietarioOalquila: "",
            mudanza: "",
            espaciosSeguros: "",
            tipoDeCompañia: "",
            mascotaSola: "",
            mascotaPaseos: "", 
            adaptacion: "",
            problemaComportamiento: "",
            caractertisticasAdoptado: "",
            cachorroMotivos: "",
            chachorroCuidados: "",
            chachorroAtencion: "",
            chachorroCastrar: "",
            cachorroCrecimiento: "",
            contactoNombreApe: "",
            contactoZona: "",
            contactoDireccion: "",
            contactoOcupacion: "",
            contactoMail: "",
            contactoEdad: "",
            contactoTelFijo: "",
            contactoCelular: "",
          });
        }
        setErrors(
          validate({
            ...input,
            [e.target.name]: e.target.value,
          })
        );
      }

return (
    
    <form className="formAdopcion-ppal" onSubmit={(e)=> handleSubmit(e)}>
      <div className="formAdopcion-contenedor">
        <div className="formAdopcion-titulo">
            <h1 className="formAdopcion-tit">FORMULARIO DE ADOPCION</h1>
        </div>
        <div className="formAdopcion-p">
            <p>El objetivo del siguiente cuestionario es encontrar la combinación óptima entre adoptado y adoptante de manera que ambos sean felices para siempre.</p>
            <p>Por favor, lea todas las preguntas y los requisitos de adopción y, de estar de acuerdo, responda el cuestionario con la mayor claridad posible.</p>
            <p> Las adopciones se limitan geográficamente a Capital Federal y Gran Buenos Aires, Argentina (sujeto a consideración)</p>
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">Antes de empezar ¿Está interesado en algún perro/gato en particular? Si es así escriba su nombre aquí.</label>
            <input
              type="text"
              autoComplete="off"
              value={input.nombreMascota}
              name="nombreMascota"
              onChange={handleChange}
              className="formAdopcion-input"
            />
            {errors.nombreMascota && <p>{errors.nombreMascota}</p>}
        </div>
         <div className="formAdopcion-container">
            <label className="formAdopcion-label">En caso de que ya haya sido adoptado ¿Estaría interesado en otro?</label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="si"
                name="adoptarOtro"
                onClick={(e) => handleCheck(e)}/> {" "}
                Si {" "}
            </label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="no"
                name="adoptarOtro"
                onClick={(e) => handleCheck(e)}/> {" "}
                No {"  "}
            </label>
            {errors.adoptarOtro && <p>{errors.adoptarOtro}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">1. ¿El animal que va a adoptar es para usted o para un tercero?</label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="mio"
                name="adoptarParaQuien"
                onClick={(e) => handleCheck(e)}/> {" "}
                Para mi {" "}
            </label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="tercero"
                name="adoptarParaQuien"
                onClick={(e) => handleCheck(e)}/> {" "}
                Para otra persona {" "}
            </label>
            {errors.adoptarParaQuien && <p>{errors.adoptarParaQuien}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">2. ¿Cuántas personas habitan en el hogar? ¿Cuáles son sus edades? ¿ Cual es su parentesco o vinculo?</label>
            <input
              type="text"
              autoComplete="off"
              value={input.convivientesYedades}
              name="convivientesYedades"
              onChange={handleChange}
              className="formAdopcion-input"
            />
            {errors.convivientesYedades && <p>{errors.convivientesYedades}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">3. ¿Hay niños en la casa? ¿De qué edad?</label>
            <input
              type="text"
              autoComplete="off"
              value={input.convivientesMenores}
              name="convivientesMenores"
              onChange={handleChange}
              className="formAdopcion-input"
            />
            {errors.convivientesMenores && <p>{errors.convivientesMenores}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">4. ¿Están todos los miembros de la familia de acuerdo en adoptar?</label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="si"
                name="comunAcuerdo"
                onClick={(e) => handleCheck(e)}/> {" "}
                Si {" "}
            </label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="no"
                name="comunAcuerdo"
                onClick={(e) => handleCheck(e)}/> {" "}
                No {" "}
            </label>
            {errors.comunAcuerdo && <p>{errors.comunAcuerdo}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">5. ¿Hay otros animales en la casa?</label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="si"
                name="hayMascotas"
                onClick={(e) => handleCheck(e)}/> {" "}
                Si {" "}
            </label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="no"
                name="hayMascotas"
                onClick={(e) => handleCheck(e)}/> {" "}
                No {" "}
            </label>
            {errors.hayMascotas && <p>{errors.hayMascotas}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">6. En caso que los haya, ¿están vacunados y/o castrados? ¿Cuáles son sus edades?</label>
            <input
              type="text"
              autoComplete="off"
              value={input.hayMascotasDetalle}
              name="hayMascotasDetalle"
              onChange={handleChange}
              className="formAdopcion-input"
            />
            {errors.hayMascotasDetalle && <p>{errors.hayMascotasDetalle}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">7. En caso que no los haya, ¿ha tenido? ¿Qué pasó con ellos?</label>
            <input
              type="text"
              autoComplete="off"
              value={input.mascotasAnteriores}
              name="mascotasAnteriores"
              onChange={handleChange}
              className="formAdopcion-input"
            />
            {errors.mascotasAnteriores && <p>{errors.mascotasAnteriores}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">8. ¿Ha pensado qué hará con el animal en vacaciones?</label>
            <input
              type="text"
              autoComplete="off"
              value={input.vacaciones}
              name="vacaciones"
              onChange={handleChange}
              className="formAdopcion-input"
            />
            {errors.vacaciones && <p>{errors.vacaciones}</p>}

        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">9. ¿Conoce los gastos y cuidados que implicará incorporar un animal y está dispuesto a asumirlos? (alimentación, atención veterinaria, etc.)</label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="si"
                name="gastos"
                onClick={(e) => handleCheck(e)}/> {" "}
                Si {" "}
            </label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="no"
                name="gastos"
                onClick={(e) => handleCheck(e)}/> {" "}
                No {" "}
            </label>
            {errors.gastos && <p>{errors.gastos}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">10. ¿Dónde vivirá el animal adoptado?</label>     
                <label className="formAdopcion-label-radio">
                <input type="radio" value='casa' name='vivienda' onChange={(e) => handleCheck(e)}/> Casa </label>
                <label className="formAdopcion-label-radio">
                <input type="radio" value='departamento' name='vivienda' onChange={(e) => handleCheck(e)}/> Departamento </label>
                <label className="formAdopcion-label-radio">
                <input type="radio" value='ph' name='vivienda' onChange={(e) => handleCheck(e)}/> Ph </label>
                <label className="formAdopcion-label-radio">
                <input type="radio" value='quinta' name='vivienda' onChange={(e) => handleCheck(e)}/> Quinta</label>
                {errors.vivienda && (<p>{errors.vivienda}</p>)}
        </div>

        <div className="formAdopcion-container">
            <label className="formAdopcion-label">11. ¿Es propietario o alquila la propiedad? En caso de ser inquilino, ¿tiene certeza que permiten tener animales?</label>
            <input type="text" 
            autoComplete="off" 
            value={input.propietarioOalquila} 
            name="propietarioOalquila" 
            onChange={handleChange} 
            className="formAdopcion-input"
            />
            {errors.propietarioOalquila && <p>{errors.propietarioOalquila}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">12. En caso de mudanza ¿qué haría con el animal?</label>
            <input type="text" autoComplete="off" value={input.mudanza} name="mudanza" onChange={handleChange} className="formAdopcion-input"/>
            {errors.mudanza && <p>{errors.mudanza}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">13. ¿Posee algún espacio al aire libre? (balcón, terraza, patio, etc). En caso que lo posea indicar si tienen cercos y/o cerramientos y de qué tipo (rejas, muros, red, etc)</label>
            <input 
            type="text" 
            autoComplete="off" 
            value={input.espaciosSeguros} 
            name="espaciosSeguros" 
            onChange={handleChange} 
            className="formAdopcion-input"
            />
            {errors.espaciosSeguros && <p>{errors.espaciosSeguros}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">14. ¿El animal que busca es para compañía, guardia, trabajo, etc.?</label>
            <input 
            type="text" 
            autoComplete="off" 
            value={input.tipoDeCompañia} 
            name="tipoDeCompañia" 
            onChange={handleChange} 
            className="formAdopcion-input"
            />
            {errors.tipoDeCompañia && <p>{errors.tipoDeCompañia}</p>}
        </div>
          
        <div className="formAdopcion-container"> {/* arreglado */}
            <label className="formAdopcion-label">15. ¿Cuántas horas estima que el animal estará solo en la propiedad?</label>
            <input 
            type="number" 
            min="1" 
            max="48"
            value={input.mascotaSola} 
            name="mascotaSola" 
            onChange={handleChange} 
            className="formAdopcion-input" 
            />
            {errors.mascotaSola && <p>{errors.mascotaSola}</p>}
        </div>  

        <div className="formAdopcion-container">
            <label className="formAdopcion-label">16. ¿Cuántas veces lo sacará a pasear por día?</label>
            <input type="text" value={input.mascotaPaseos} name="input.mascotaPaseos" onChange={handleChange} className="formAdopcion-input" />
            {errors.mascotaPaseos && <p>{errors.mascotaPaseos}</p>}
        </div>  


        <div className="formAdopcion-container">
            <label className="formAdopcion-label">17. ¿Está al tanto de que el animal necesitará un período aprox. de 15 a 30 días para adaptarse a su nueva familia, horarios, lugares, etc.?</label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="si"
                name="adaptacion"
                onClick={(e) => handleCheck(e)}/> {" "}
                Si {" "}
            </label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="no"
                name="adaptacion"
                onClick={(e) => handleCheck(e)}/> {" "}
                No {" "}
            </label>
            {errors.adaptacion && <p>{errors.adaptacion}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">18. Ante una inadaptación o problema de comportamiento en el animal que adopte, ¿qué haría?</label>
            <input type="text" 
            autoComplete="off" 
            value={input.problemaComportamiento} 
            name="problemaComportamiento" 
            onChange={handleChange} 
            className="formAdopcion-input"
            />
            {errors.problemaComportamiento && <p>{errors.problemaComportamiento}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">19. Por favor describa las características del animal que busca adoptar y cualquier dato que considere importante a tener en cuenta.</label>
            <input 
            type="text" 
            autoComplete="off" 
            value={input.caractertisticasAdoptado} 
            name="caractertisticasAdoptado" 
            onChange={handleChange} 
            className="formAdopcion-input"
            />
            {errors.caractertisticasAdoptado && <p>{errors.caractertisticasAdoptado}</p>}
        </div>
        <div className="formAdopcion-p">
            <p className="formAdopcion-pp">LAS SIGUIENTES PREGUNTAS SON SÓLO PARA AQUELLOS INTERESADOS EN ADOPTAR UN CACHORRO.</p>
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">20. ¿Por qué se decide por un cachorro?</label>
            <input 
            type="text" 
            autoComplete="off" 
            value={input.cachorroMotivos} 
            name="cachorroMotivos" 
            onChange={handleChange} 
            className="formAdopcion-input"
            />
            {errors.cachorroMotivos && <p>{errors.cachorroMotivos}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">21. ¿Qué cuidados cree que necesita un cachorro?</label>
            <input 
            type="text" 
            autoComplete="off" 
            value={input.chachorroCuidados} 
            name="chachorroCuidados" 
            onChange={handleChange} 
            className="formAdopcion-input"
            />
            {errors.chachorroCuidados && <p>{errors.chachorroCuidados}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">22. ¿Es usted consciente que un cachorro requiere de mayor atención y puede que durante la adaptación haga sus necesidades en diferentes lugares de la casa, rompa objetos, llore por las noches, etc?</label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="si"
                name="chachorroAtencion"
                onClick={(e) => handleCheck(e)}/> {" "}
                Si {" "}
            </label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="no"
                name="chachorroAtencion"
                onClick={(e) => handleCheck(e)}/> {" "}
                No {" "}
            </label>
            {errors.chachorroAtencion && <p>{errors.chachorroAtencion}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">23. Es un requisito prioritario el compromiso de castrar al cachorro adoptado entre los 6 y los 8 meses de edad. Estás de acuerdo en cumplirlo?</label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="si"
                name="chachorroCastrar"
                onClick={(e) => handleCheck(e)}/> {" "}
                Si, estoy de acuerdo {" "}
            </label>
            <label className="formAdopcion-label-radio">
                <input 
                type="radio"
                autoComplete="off"
                value="no"
                name="chachorroCastrar"
                onClick={(e) => handleCheck(e)}/> {" "}
                No estoy de acuerdo {" "}
            </label>
            {errors.chachorroCastrar && <p>{errors.chachorroCastrar}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">24. ¿Qué ocurriría si el cachorro crece más de lo esperado?</label>
            <input 
            type="text" 
            autoComplete="off" 
            value={input.cachorroCrecimiento} 
            name="cachorroCrecimiento" 
            onChange={handleChange} 
            className="formAdopcion-input" 
            />
            {errors.cachorroCrecimiento && <p>{errors.cachorroCrecimiento}</p>}
        </div>

        <div className="formAdopcion-titulo" >
            <h2 className="formAdopcion-tit" >DATOS DE CONTACTO</h2>
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">Nombre y Apellido: </label>
            <input 
            type="text" 
            autoComplete="off" 
            value={input.contactoNombreApe} 
            name="contactoNombreApe" 
            onChange={handleChange} 
            className="formAdopcion-input"
            />
            {errors.contactoNombreApe && <p>{errors.contactoNombreApe}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">Zona de Residencia (Localidad/Barrio): </label>
            <input 
            type="text" 
            autoComplete="off" 
            value={input.contactoZona} 
            name="contactoZona" 
            onChange={handleChange} 
            className="formAdopcion-input"
            />
            {errors.contactoZona && <p>{errors.contactoZona}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">Dirección: </label>
            <input 
            type="text" 
            autoComplete="off" 
            value={input.contactoDireccion} 
            name="contactoDireccion" 
            onChange={handleChange}
            className="formAdopcion-input" 
            />
            {errors.contactoDireccion && <p>{errors.contactoDireccion}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">Ocupación: </label>
            <input 
            type="text" 
            autoComplete="off" 
            value={input.contactoOcupacion} 
            name="contactoOcupacion" 
            onChange={handleChange} 
            className="formAdopcion-input"
            />
            {errors.contactoOcupacion && <p>{errors.contactoOcupacion}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">Correo electrónico: </label>
            <input 
            type="email" 
            autoComplete="off" 
            value={input.contactoMail} 
            name="contactoMail" 
            onChange={handleChange} 
            className="formAdopcion-input"
            />
            {errors.contactoMail && <p>{errors.contactoMail}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">Edad: </label>
            <input 
            type="text" 
            autoComplete="off" 
            value={input.contactoEdad} 
            name="contactoEdad" 
            onChange={handleChange} 
            className="formAdopcion-input"
            />
            {errors.contactoEdad && <p>{errors.contactoEdad}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">Teléfono fijo: </label>
            <input 
            type="text" 
            autoComplete="off" 
            value={input.contactoTelFijo} 
            name="contactoTelFijo" 
            onChange={handleChange} 
            className="formAdopcion-input"
            />
            {errors.contactoTelFijo && <p>{errors.contactoTelFijo}</p>}
        </div>
        <div className="formAdopcion-container">
            <label className="formAdopcion-label">Teléfono celular: </label>
            <input 
            type="text" 
            autoComplete="off" 
            value={input.contactoCelular} 
            name="contactoCelular" 
            onChange={handleChange} 
            className="formAdopcion-input"
            />
            {errors.contactoCelular && <p>{errors.contactoCelular}</p>}
        </div>
        <div className="formAdopcion-btn">
            <button type="submit"> Enviar </button>
        </div>
        <div>
            
        </div> 
        </div> 
      
    </form>
    
);}