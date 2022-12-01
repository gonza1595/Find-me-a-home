import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import {
  formularioPostMascota,
  traerMascotas,
} from "../../redux/actions/index";
import "./FormMascota.css";
import Dark from "../NavBar/Dark";


function validate(input) {
  let errors = {};

  if (!input.nombre) {
    errors.nombre = "Se requiere un nombre";
  } else if (!input.descripcion) {
    errors.descripcion = "Se requiere una descripcion";
  } else if (!input.imagen) {
    errors.imagen = "Se requiere imagen";
  } else if (!input.edad) {
    errors.edad = "Se requiere edad";
  } else if (!input.tamaño) {
    errors.tamaño = "Se requiere tamaño";
  } else if (!input.raza) {
    errors.raza = "Se requiere raza";
  } else if (!input.sexo) {
    errors.sexo = "Se requiere sexo";
  } else if (!input.especie) {
    errors.especie = "Se requiere especie";
  }

  return errors;
}

export default function Form() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState({});
  const modo = localStorage.getItem('modo');

  // Inputs
  const [input, setInput] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
    edad: "",
    raza: "",
    sexo: "",
    especie: "",
    tamaño: "",
    //arreglo de Pet
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
    if (
      !input.especie ||
      !input.sexo ||
      !input.raza ||
      !input.tamaño ||
      !input.edad ||
      !input.imagen ||
      !input.descripcion ||
      !input.nombre
    ) {
      e.preventDefault();
      alert("Verifique los campos para poder continuar");
    } else {
      e.preventDefault();
      const formData = new FormData(e.target); /// esta línea es para mandar la imagen y el resto del form
      dispatch(formularioPostMascota(formData));
      alert("Su mascota ha sido posteado exitosamente");
      // history.push("/"); //fijarse si se deja o no

      setInput({
        nombre: "",
        descripcion: "",
        imagen: "",
        edad: "",
        raza: "",
        sexo: "",
        especie: "",
        tamaño: "",
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
    <div className={`cont ${modo}`}>
    <div className={`createMascota ${modo}`}>
        <h1 className="tituloFormMascota">POSTEAR MASCOTA</h1>

        <form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
      
          <div >
            <label> Nombre: </label>
            <input
              type="text"
              autoComplete="off"
              value={input.nombre}
              name="nombre"
              onChange={handleChange}
              className={`inputFormMascotas ${modo}`}
            />
            {errors.nombre && <p>{errors.nombre}</p>}
          </div>
          <div className="containerFormMascotas">
            <label>Descripcion: </label>
            <textarea
              type="text"
              autoComplete="off"
              value={input.descripcion}
              name="descripcion"
              onChange={handleChange}
              className={`inputFormMascotas ${modo}`}
            />
            {errors.descripcion && <p>{errors.descripcion}</p>}
          </div>
          <div className="containerFormMascotas">
            <label>Edad: </label>
            <input
              type="number"
              autoComplete="off"
              value={input.edad}
              name="edad"
              onChange={handleChange}
              className={`inputFormMascotas ${modo}`}
            />
            {errors.edad && <p>{errors.edad}</p>}
          </div>
          <div className="containerFormMascotas">
            <label>Raza: </label>
            <input
              type="text"
              autoComplete="off"
              value={input.raza}
              name="raza"
              onChange={handleChange}
              className={`inputFormMascotas ${modo}`}
            />
            {errors.raza && <p>{errors.raza}</p>}
          </div>
          <div className="containerFormMascotas">
            <label>Sexo: </label>
            <label>
              <input
                type="radio"
                autoComplete="off"
                value="masculino"
                name="sexo"
                onClick={(e) => handleCheck(e)}
              />{" "}
              Masculino{" "}
            </label>
            <label>
              <input
                type="radio"
                autoComplete="off"
                value="femenino"
                name="sexo"
                onClick={(e) => handleCheck(e)}
              />{" "}
              Femenino{" "}
            </label>
            {errors.sexo && <p>{errors.sexo}</p>}
          </div>
          <div className="containerFormMascotas">
            <label>Especie: </label>
            <label>
              <input
                type="radio"
                autoComplete="off"
                value="perro"
                name="especie"
                onClick={(e) => handleCheck(e)}
              />{" "}
              Perro{" "}
            </label>
            <label>
              <input
                type="radio"
                autoComplete="off"
                value="gato"
                name="especie"
                onClick={(e) => handleCheck(e)}
              />{" "}
              Gato{" "}
            </label>
            {errors.especie && <p>{errors.especie}</p>}
          </div>
          <div className="containerFormMascotas">
            <label className="">Tamaño: </label>
            <label>
              <input
                type="radio"
                autoComplete="off"
                value="pequeño"
                name="tamaño"
                onClick={(e) => handleCheck(e)}
              />{" "}
              Pequeño{" "}
            </label>
            <label>
              <input
                type="radio"
                autoComplete="off"
                value="mediano"
                name="tamaño"
                onClick={(e) => handleCheck(e)}
              />{" "}
              Mediano{" "}
            </label>
            <label>
              <input
                type="radio"
                autoComplete="off"
                value="grande"
                name="tamaño"
                onClick={(e) => handleCheck(e)}
              />{" "}
              Grande{" "}
            </label>
            {errors.tamaño && <p>{errors.tamaño}</p>}
          </div>
          <div >
            <label>Imagen: </label>
            <input
              type="file"
              autoComplete="off"
              value={input.imagen}
              name="imagen"
              onChange={handleChange}
              //className={`inputFormMascotas ${modo}`}
            />
            {errors.imagen && <p>{errors.imagen}</p>}
          </div>
          <br />
          <div>
            <button type="submit"> Postear </button>
            <Link to="/dashboard/mascotas">
              <button>Volver</button>
            </Link>
          </div>
        </form>
      </div>
      </div>
  );
}
