import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import {formularioIniciarSesion} from "../../redux/actions/index"
import NavBar from "../NavBar/NavBar"
/* recordar cuando usar usuario */

function validate(input) {
    let errors = {}

    if(!input.nombre){
        errors.name = ("Se requiere un nombre") 
    } 
    
    else if(!input.contraseña){
        errors.difficulty = ("Se requiere una contraseña")
    }

    else if(!input.correo){
        errors.difficulty = ("Se requiere correo")
    }

    else if(!input.edad){
        errors.difficulty = ("Se requiere edad")
    }
    else if(!input.direccion){
        errors.difficulty = ("Se requiere direccion")
    }
    else if(!input.rango){
        errors.difficulty = ("Se requiere rango")
    }
    return errors
}
    
export default function Form() {
    const dispatch = useDispatch()
    const history = useHistory() 
    const usuario = useSelector((state) => state.usuario)
    
    const [errors, setErrors] = useState({})  

    // Inputs 
    const [input, setInput] = useState({ 
        nombre: '',
        contraseña: '',
        correo: '',
        edad:'',
        direccion: '',
        rango: '',
        usuario: [],
    })

    function handleChange(e){
        e.preventDefault();
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors(validate({
          ...input,
          [e.target.name]: [e.target.value]
        })
        )
    }
        

        function handleCheck(e){ // rango
            if(e.target.checked){
                setInput({
                    ...input, 
                    [e.target.name] : e.target.value
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
                dispatch(formularioIniciarSesion(input));
                alert('Tu usuario ha sido creado exitosamente');
                
                history.push('/home')
                
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
    <div>
        <NavBar/>
        <h1>Registrarse</h1>
        <form>
            <div>
                <label>Nombre: </label>
                <input type="text" autoComplete="off" value={input.nombre} name='nombre' onChange={handleChange}/>
                {errors.nombre && (<p>{errors.nombre}</p>)}
            </div>
            <div>
                <label>Contraseña: </label>
                <input type="password" autoComplete="off" value={input.contraseña} name='contraseña' onChange={handleChange}/>
                {errors.contraseña && (<p>{errors.contraseña}</p>)}
            </div>
            <div>
                <label>Correo: </label>
                <input type="text" autoComplete="off" value={input.correo} name='correo' onChange={handleChange}/>
                {errors.correo && (<p>{errors.correo}</p>)}
            </div>
            <div>
                <label>Edad: </label>
                <input type="number" autoComplete="off" value={input.edad} name='edad' onChange={handleChange}/>
                {errors.edad && (<p>{errors.edad}</p>)}
            </div>
            <div>
                <label>Direccion: </label>
                <input type="text" autoComplete="off" value={input.direccion} name='direccion' onChange={handleChange}/>
                {errors.direccion && (<p>{errors.direccion}</p>)}
            </div>
            

            <div>
                <label>Rango: </label>
                <label>
                <input type="radio" value='admin' name='admin' onChange={(e) => handleCheck(e)}/> Administrador </label>
                <label>
                <input type="radio" value='usuario' name='usuario' onChange={(e) => handleCheck(e)}/> Usuario </label>
                <label>
                <input type="radio" value='refugio' name='refugio' onChange={(e) => handleCheck(e)}/> Refugio </label>
                {errors.rango && (<p>{errors.rango}</p>)}
            </div>

            <div>
                <button type='submit'> Registrarse </button>
            </div>

        </form>
    </div>

)}
