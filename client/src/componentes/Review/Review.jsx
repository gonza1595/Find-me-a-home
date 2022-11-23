import { useState } from "react";
import "./Review.css"
import { FaStar } from "react-icons/fa";

/* npm install react-icons */

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

export default function Reviews() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

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
    <h2> React Ratings </h2>
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
    <textarea
      placeholder="What's your experience?"
      className="textarea-reviews"
    />

    <button
      className="button-reviews"
    >
      Submit
    </button>
    
  </div>
);
};
