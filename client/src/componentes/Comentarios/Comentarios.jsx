import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, traerReview, Review} from "../../redux/actions";
import "./Comentarios.css"
import { useHistory } from "react-router";
import { Link } from "react-router-dom";




export const Comentarios = (id) => {
  const dispatch = useDispatch();
 // const userLogged = JSON.parse(localStorage.getItem("userLogged"));

  //console.log(userLogged);
  const allCommentsByProduct = useSelector((state) => state.comentarios);
  const userId = Object.values(useSelector((state) => state.login)) 
  const logged = localStorage.getItem('login');

  console.log(logged)
  

  const [comment, setComment] = useState("");
  const [ondelete, onsetDelete] = useState("");
  const history = useHistory();

  const modo = localStorage.getItem('modo');

  const handleOnChange = (e) => {
    e.preventDefault()
    setComment(e.target.value);

  };

function handlePost(e){

  if(!logged){

    alert("loguate")
    
  }else{

     e.preventDefault()
  dispatch(Review({id:id , comentarios:comment}))
  setComment("");
 
  refreshPage()
  }

 
}


function refreshPage() {
  window.location.reload();
}


  const handlePost22 = () => {
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
    

        <div>


        {

            logged?

        <div className="review-comentario">
          <span className={`titulo-comentario ${modo}`}>Postea tu comentario!</span>
          <textarea className={`input-comentario ${modo}`} onChange={handleOnChange} />

          <button className="boton-comentario"  onClick={(e)=> handlePost(e)}>Enviar</button>
          <div id="commentSent" className="commentSent">
            {/* <div>
              <span>Comentario enviado existosameente!</span>
            </div> */}
          </div>




        </div>

            :

            <Link to="/iniciarSesion">
            
            <button>Logueate para comentar</button>

            </Link>
              



        }


        
        </div>


     
   
  );
};

export default Comentarios; 
