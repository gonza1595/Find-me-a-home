import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import {formularioRegistroUsuario} from "../../redux/actions/index"
import './FormUsuario.css'
/* recordar cuando usar usuario */

function validate(input) {
    let errors = {}

    if(!input.nombre){
        errors.nombre = ("Se requiere un nombre") 
    } 
    
    else if(!input.contraseña){
        errors.contraseña = ("Se requiere una contraseña")
    }

    else if(!input.correo){
        errors.correo = ("Se requiere correo")
    }

    else if(!input.edad){
        errors.edad = ("Se requiere edad")
    }
    else if(!input.direccion){
        errors.direccion = ("Se requiere direccion")
    }
    else if(!input.rango){
        errors.rango = ("Se requiere rango")
    }
    
   
    return errors
}
    
export default function Form() {
    const dispatch = useDispatch()
    const history = useHistory() 
    const usuario = useSelector((state) => state.usuario) //no haria falta
    
    const [errors, setErrors] = useState({})  

    // Inputs 
    const [input, setInput] = useState({ 
        "nombre": '',
        "contraseña": '',
        "correo": '',
        "edad":'',
        "direccion": '',
        "rango": '',
        "usuario": [],
    })

  const modo = localStorage.getItem('modo');


    function handleChange(e){
        e.preventDefault();
        console.log(input);
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors(validate({
          ...input,
          [e.target.name]: [e.target.value]
        })
        )
    }
        

        function handleCheck(e){ // rango
            if(e.target.checked){
            console.log(input)
                
                setInput({
                    ...input, 
                    rango : e.target.value // [e.target.name]
                })
            }
             setErrors(validate({
                 ...input, 
                 [e.target.name] : e.target.value  
             }))
        }

        function handleSubmit(e){
            if(!input.nombre || !input.contraseña || !input.correo || !input.edad || !input.direccion || !input.rango ){
                e.preventDefault();
                alert('Verifique los campos para poder continuar')
            } else {
                e.preventDefault();
                dispatch(formularioRegistroUsuario(input));
                alert('Su usuario ha sido creado exitosamente');
                
                history.push('/') //fijarse si se deja o no
                
                setInput({
                    nombre: '',
                    contraseña: '',
                    correo: '',
                    edad:'',
                    direccion:'',
                    rango: ''             
                })
            }
             setErrors(validate({
                 ...input, 
                [e.target.name] : e.target.value
             }))    
        }     

return (
<div className={`cajita-usuario ${modo}`}>
       <form   className={`container_formUs ${modo}`} onSubmit={(e) => handleSubmit(e)}>
                  <h1 className={`welcome ${modo}`}>Registrarse</h1>
       <div>
 <div className='window'>

   <div className={`input-fields ${modo}`}>
           <div>
               <label >Nombre: </label>
               <input className={`input-line full-width  ${modo}`}type="text" autoComplete="off" value={input.nombre} name='nombre' onChange={handleChange}/>
               {errors.nombre && (<p>{errors.nombre}</p>)}
           </div>
           <div>
               <label >Contraseña: </label>
               <input className={`input-line full-width  ${modo}`} type="password" autoComplete="off" value={input.contraseña} name='contraseña' onChange={handleChange}/>
               {errors.contraseña && (<p>{errors.contraseña}</p>)}
           </div>
           <div>
               <label >Correo: </label>
               <input className={`input-line full-width  ${modo}`} type="text" autoComplete="off" value={input.correo} name='correo' onChange={handleChange}/>
               {errors.correo && (<p>{errors.correo}</p>)}
           </div>
           <div>
               <label>Edad: </label>
               <input className={`input-line full-width  ${modo}`}type="number" autoComplete="off" value={input.edad} name='edad' onChange={handleChange}/>
               {errors.edad && (<p>{errors.edad}</p>)}
           </div>
           <div>
               <label >Direccion: </label>
               <input  className={`input-line full-width  ${modo}`} type="text" autoComplete="off" value={input.direccion} name='direccion' onChange={handleChange}/>
               {errors.direccion && (<p>{errors.direccion}</p>)}
           </div>
           

           <div>
               <label className='rango' >Rango: </label>
               <label>
               <input  type="radio" value='usuario' name='rango' onClick={(e) => handleCheck(e)}/> Usuario </label>
               <label>
               <input   type="radio" value='refugio' name='rango' onClick={(e) => handleCheck(e)}/> Refugio </label>
               {errors.rango && (<p>{errors.rango}</p>)}
           </div>
           </div>

           <div>
               <button  className='ghost-round full-width' type='submit'> Registrarse </button>
           </div>
           </div>
           </div>
           
       </form>
   
   </div>

)}