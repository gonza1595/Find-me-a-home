import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, traerReview, Review} from "../../redux/actions";
import "./Comentarios.css"
import { useHistory } from "react-router";




export const Comentarios = (id) => {
  const dispatch = useDispatch();
 // const userLogged = JSON.parse(localStorage.getItem("userLogged"));

  //console.log(userLogged);
  const allCommentsByProduct = useSelector((state) => state.comentarios);
  const userId = Object.values(useSelector((state) => state.login)) 
  
  const [comment, setComment] = useState("");
  const [ondelete, onsetDelete] = useState("");
  const history = useHistory();

  const handleOnChange = (e) => {
    e.preventDefault()
    setComment(e.target.value);
    console.log(comment)
  };

function handlePost(e){
  e.preventDefault()
  dispatch(Review({id:id , comentarios:comment}))
  setComment("");
 
  refreshPage()
}


function refreshPage() {
  window.location.reload();
}


  const handlePost2 = () => {
    dispatch(
        Review( {id:id , comentarios:comment} )
        
    ).then(() => {
      setComment("");
      history.push("/productos/" + id)
      dispatch(traerReview(id.id))
        .then(() => {
          document.getElementById("commentSent").style.display = "block";
        })
        .then(() => {
          handleModal();
        });
    });
  };

  //console.log({ userId: userLogged.id, productId: id.id, text: comment });

  //not deleting
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteComment(id)).then(() => {
      dispatch(traerReview(id.id))
        .then(() => {
          document.getElementById("commentDeleted").style.display = "block";
        })
        .then(() => {
          handleModalDeleted();
        });
    });
  };

  const handleModalDeleted = () => {
    setTimeout(() => {
      document.getElementById("commentDeleted").style.display = "none";
      dispatch(traerReview(id.id));
    }, 900);
  };

  //win
  const handleModal = () => {
    setTimeout(() => {
      document.getElementById("commentSent").style.display = "none";
      dispatch(traerReview(id.id));
    }, 1000);
  };
  
  // useEffect(() => {
  //   dispatch(Review);
  // }, [dispatch]);

  //comments only show after second click

  return (

        <div className="review-comentario">
          <span className="titulo-comentario">Postea tu comentario!</span>
          <textarea className="input-comentario" onChange={handleOnChange} />
          <button className="boton-comentario"  onClick={(e)=> handlePost(e)}>Enviar</button>
          <div id="commentSent" className="commentSent">
            {/* <div>
              <span>Comentario enviado existosameente!</span>
            </div> */}
          </div>
        </div>
     
   
  );
};

export default Comentarios; 
