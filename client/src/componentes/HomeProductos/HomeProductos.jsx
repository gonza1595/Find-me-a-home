import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import SearchBarProducto from '../SearchBar/SearchBarProducto';
import './HomeProductos.css';
//importar paginado cuando este disponible
import CardProductos from "../CardProductos/CardProductos";
import Pagination from "../Pagination/Pagination.jsx"
import { traerProductosfltrados } from "../../redux/actions/index.js";

export default function HomeProductos() {
	const dispatch = useDispatch();
    
  
 


      //FILTROS

      const [filtro, setfiltro] = useState("")

      const [orden, setorden] = useState("")

      const [tipo, settipo] = useState("")

      

    useEffect(() => {
          dispatch(traerProductosfltrados( filtro, orden, tipo));
        }, [dispatch,filtro, orden, tipo]);

    const productos = useSelector((state)=>state.productos)

      const changeFiltro = (e) => {
        
        e.preventDefault();

      setfiltro(e.target.value)

      }

      const changeOrden = (e) => {

        e.preventDefault();

      setorden(e.target.value)

   
      }

      const changetipo = (e) => {

        e.preventDefault();

      settipo(e.target.value)

      }
     
    

      const [page, setPage] = useState(1);
      const showPerPage = 10;
      const lastOnPage = page * showPerPage;
      const firstOnPage = lastOnPage - showPerPage;
      const showProductos = productos.slice(firstOnPage, lastOnPage);

      function pagination(pageNumber) {
        setPage(pageNumber);
      }


    return (


    <div className="homeContainer">

        <NavBar/>

        <SearchBar/>

        <div className="paginatedDiv">
    
        <Pagination
            showPerPage={showPerPage}
            mascotasState={productos.length}
            pagination={pagination}
            page={page}
          ></Pagination>
    
        </div>

        <div className="containerCards">

{   showProductos ?

    showProductos.map((el)=>{
        return (
            <div className="cards">

                <Link to = {"/productos/"+el.id}>

                <CardProductos nombre={el.nombre} tipo={el.tipo} rating={el.rating} imagen={el.imagen} precio={el.precio} key={el.id}/>

                </Link>

            </div>
          
        );
    })

    :   <p>loader</p>

}
        </div>

        <div className="filters">

            <h4 className="underline">Filters</h4>

          <div>


      <select
        onChange={(e) => changeOrden(e)}
      >
        <option  value="ASC" >ASC</option>
        <option  value="DESC" >DESC</option>
        
      </select>

      <select
        onChange={(e) => changetipo(e)}
      >
        <option  disabled > tipo </option>
        <option  value="Paseo" >Paseo</option>
        <option  value="Alimentación" >Alimentación</option>
        <option  value="Juguetes" >Juguetes</option>


      </select>

      <select
        onChange={(e) => changeFiltro(e)}
      >
        <option  disabled >Ordenar por</option>
        <option  value="precio" >Precio</option>
        <option  value="calificacion" >Calificaion</option>

      </select>


    </div>

            {/* componente filters */}

        </div>

    </div>

        )
}
