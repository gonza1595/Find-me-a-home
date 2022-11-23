import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Review.css"
import { FaStar } from "react-icons/fa";
import { Review, traerReview } from "../../redux/actions";

/* npm install react-icons */

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

function validate(input){
  let errors = {};
  if(!input.texto){
    errors.texto = "Se requiere un comentario";
  }
  if(!input.calificacion){
    errors.calificacion = "Se requiere una calificacion"
  }
  return errors
}


export default function Reviews() {
  const dispatch = useDispatch();
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    texto: "",
    calificacion: "",
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


  function handleSubmit(e){
    if(!input.texto)
    {
      e.preventDefault();
      alert("Verifique los campos para poder continuar");
    }else{
      e.preventDefault();
      dispatch(Review(input));
      alert("Su calificacion ha sido posteada exitosamente");
    
      setInput({
        texto: "",
        calificacion: "",
        });
      }
      setErrors(
        validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
  }


  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
};

const handleMouseLeave = () => {
  setHoverValue(undefined)
}


return (
  <div className="container">
    <h2>Calificación</h2>
    <form onSubmit={(e) => handleSubmit(e)}>
    <div className="stars-reviews">
      {stars.map((_, index) => {
        return (
          
            <FaStar
            key={index}
            size={24}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
            style={{
              marginRight: 10,
              cursor: "pointer"
            }}
          />   
        )
      })}  
    </div>
    <div>
    <input
    type="text"
    autoComplete="off"
    value={input.texto}
    name="texto"
      placeholder="Que te parecio el producto?"
      className="textarea-reviews"
      onChange={handleChange}
      /> 
      {errors.texto && <p>{errors.texto}</p>}
</div>
<div>
    <button type="submit" className="button-reviews">Enviar</button>
    </div>
    </form>
  </div>

);
};
