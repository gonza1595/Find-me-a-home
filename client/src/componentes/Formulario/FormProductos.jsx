import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { crearProducto } from "../../redux/actions/index";
import "./FormMascota.css";

function validate(input) {
  let errors = {};

  if (!input.nombre) {
    errors.nombre = "Se requiere un nombre";
  } else if (!input.descripcion) {
    errors.descripcion = "Se requiere una descripcion";
  } else if (!input.imagen) {
    errors.imagen = "Se requiere imagen";
  } else if (!input.stock) {
    errors.stock = "Se requiere stock";
  } else if (!input.calificacion) {
    errors.calificacion = "Se requiere calificacion";
  } else if (!input.tipo) {
    errors.tipo = "Se requiere tipo";
  } else if (!input.precio) {
    errors.precio = "Se requiere precio";
  }
  return errors;
}

export default function Form() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState({});

  // Inputs
  const [input, setInput] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
    stock: "",
    calificacion: "",
    tipo: "",
    precio: "",
    //arreglo de Product
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
      !input.precio ||
      !input.tipo ||
      !input.calificacion ||
      !input.stock ||
      !input.imagen ||
      !input.descripcion ||
      !input.nombre
    ) {
      e.preventDefault();
      alert("Verifique los campos para poder continuar");
    } else {
      e.preventDefault();
      dispatch(crearProducto(input));
      alert("Su producto ha sido creado exitosamente");
      // history.push("/"); //fijarse si se deja o no

      setInput({
        nombre: "",
        descripcion: "",
        imagen: "",
        stock: "",
        calificacion: "",
        tipo: "",
        precio: "",
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
    <div>
      <div className="createFormMascota">
        <h1 className="tituloFormMascota">CREAR PRODUCTO</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="containerFormMascotas">
            <label> Nombre: </label>
            <input
              type="text"
              autoComplete="off"
              value={input.nombre}
              name="nombre"
              onChange={handleChange}
              className="inputFormMascotas"
            />
            {errors.nombre && <p>{errors.nombre}</p>}
          </div>
          <div className="containerFormMascotas">
            <label>Descripcion: </label>
            <input
              type="text"
              autoComplete="off"
              value={input.descripcion}
              name="descripcion"
              onChange={handleChange}
              className="inputFormMascotas"
            />
            {errors.descripcion && <p>{errors.descripcion}</p>}
          </div>
          <div className="containerFormMascotas">
            <label>Imagen: </label>
            <input
              type="text"
              autoComplete="off"
              value={input.imagen}
              name="imagen"
              onChange={handleChange}
              className="inputFormMascotas"
            />
            {errors.imagen && <p>{errors.imagen}</p>}
          </div>
          <div className="containerFormMascotas">
            <label>Stock: </label>
            <input
              type="number"
              autoComplete="off"
              value={input.stock}
              name="stock"
              onChange={handleChange}
              className="inputFormMascotas"
            />
            {errors.stock && <p>{errors.stock}</p>}
          </div>
          <div className="containerFormMascotas">
            <label>Calificacion: </label>
            <input
              type="text"
              autoComplete="off"
              value={input.calificacion}
              name="calificacion"
              onChange={handleChange}
              className="inputFormMascotas"
            />
            {errors.calificacion && <p>{errors.calificacion}</p>}
          </div>

          <div className="containerFormMascotas">
            <label>Precio: </label>
            <input
              type="text"
              autoComplete="off"
              value={input.precio}
              name="precio"
              onChange={handleChange}
              className="inputFormMascotas"
            />
            {errors.precio && <p>{errors.precio}</p>}
          </div>
          <div className="containerFormMascotas">
            <label>Tipo: </label>
            <input
              type="text"
              autoComplete="off"
              value={input.tipo}
              name="tipo"
              onChange={handleChange}
              className="inputFormMascotas"
            />
            {errors.tipo && <p>{errors.tipo}</p>}
          </div>
          <div>
            <button type="submit"> Crear</button>
            <Link to="/dashboard/productos">
              <button>Volver</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
