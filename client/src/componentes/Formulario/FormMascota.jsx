import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import {formularioPostMascota} from "../../redux/actions/index"
import NavBar from "../NavBar/NavBar"



function validate(input) {
    let errors = {}

    if(!input.nombre){
        errors.nombre = ("Se requiere un nombre") 
    }   
    else if(!input.descripcion){
        errors.descripcion = ("Se requiere una descripcion")
    }

    else if(!input.imagen){
        errors.imagen = ("Se requiere imagen")
    }

    else if(!input.edad){
        errors.edad = ("Se requiere edad")
    }
    else if(!input.tamaño){
        errors.tamaño = ("Se requiere tamaño")
    }
    else if(!input.raza){
        errors.raza = ("Se requiere raza")
    }
    else if(!input.sexo){
        errors.sexo = ("Se requiere sexo")
    }
    else if(!input.especie){
        errors.especie = ("Se requiere especie")
    }
   
    return errors
}

export default function Form(){
    const dispatch = useDispatch()
    const history = useHistory() 

    const [errors, setErrors] = useState({})  


     // Inputs 
     const [input, setInput] = useState({ 
        nombre: '',
        descripcion: '',
        imagen: '',
        edad:'',
        raza: '',
        sexo: '',
        especie: '',
        tamaño: '',
      //arreglo de Pet
    })

    function handleChange(e){
        // Le agregamos el e.target.value (lo que vamos modificando) al input actual 

        e.preventDefault();
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors(validate({
          ...input,
          [e.target.name]: [e.target.value]
        })
        )
    }


    function handleCheck(e){
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
        if( !input.especie || !input.sexo || !input.raza || !input.tamaño ||!input.edad ||!input.imagen ||!input.descripcion ||!input.nombre ){
            e.preventDefault();
            alert('Verifique los campos para poder continuar')
        } else {
            e.preventDefault();
            dispatch(formularioPostMascota(input));
            alert('Su mascota ha sido posteado exitosamente'); 
            history.push('/home') //fijarse si se deja o no
       
            setInput({
                nombre: '',
                descripcion: '',
                imagen: '',
                edad:'',
                raza: '',
                sexo: '',
                especie: '',
            })
        }
         setErrors(validate({
             ...input, 
            [e.target.name] : e.target.value
         }))    
    }

return(
    <div>
    <NavBar/>
    <h1>Postear Mascota</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
        <div>
            <label>Nombre: </label>
            <input type="text" autoComplete="off" value={input.nombre} name='nombre' onChange={handleChange}/>
            {errors.nombre && (<p>{errors.nombre}</p>)}
        </div>
        <div>
            <label>Descripcion: </label>
            <input type="text" autoComplete="off" value={input.descripcion} name='descripcion' onChange={handleChange}/>
            {errors.descripcion && (<p>{errors.descripcion}</p>)}
        </div>
        <div>
            <label>Imagen: </label>
            <input type="text" autoComplete="off" value={input.imagen} name='imagen' onChange={handleChange}/>
            {errors.imagen && (<p>{errors.imagen}</p>)}
        </div>
        <div>
            <label>Edad: </label>
            <input type="number" autoComplete="off" value={input.edad} name='edad' onChange={handleChange}/>
            {errors.edad && (<p>{errors.edad}</p>)}
        </div>
        <div>
            <label>Raza: </label>
            <input type="text" autoComplete="off" value={input.raza} name='raza' onChange={handleChange}/>
            {errors.raza && (<p>{errors.raza}</p>)}
        </div>
        

        <div>
            <label>Sexo: </label>
            <label>
            <input type="radio" value='masculino' name='masculino' onChange={(e) => handleCheck(e)}/> Masculino </label>
            <label>
            <input type="radio" value='femenino' name='femenino' onChange={(e) => handleCheck(e)}/> Femenino </label>
            {errors.sexo && (<p>{errors.sexo}</p>)}
        </div>
        <div>
            <label>Especie: </label>
            <label>
            <input type="radio" value='perro' name='perro' onChange={(e) => handleCheck(e)}/> Perro </label>
            <label>
            <input type="radio" value='gato' name='gato' onChange={(e) => handleCheck(e)}/> Gato </label>
            {errors.especie && (<p>{errors.especie}</p>)}
        </div>
        <div>
            <label>tamaño: </label>
            <label>
            <input type="radio" value='pequeño' name='pequeño' onChange={(e) => handleCheck(e)}/> Pequeño </label>
            <label>
            <input type="radio" value='mediano' name='mediano' onChange={(e) => handleCheck(e)}/> Mediano </label>
            <label>
            <input type="radio" value='grande' name='grande' onChange={(e) => handleCheck(e)}/> Grande </label>
            {errors.tamaño && (<p>{errors.tamaño}</p>)}
        </div>
        <div>
            <button type='submit'> Postear </button>
        </div>

    </form>
</div>
)
}