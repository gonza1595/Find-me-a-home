import React, {useState} from 'react';
import CardMascotas from './CardMascotas/CardMascotas.jsx';
import NavBar from '../NavBar/NavBar';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {traerMascotas} from '../../redux/actions/index';
import {Link} from 'react-router-dom';
import './HomeMascotas.css';
import Pagination from '../Pagination/Pagination.jsx';
import FiltrosMascotas from './FiltrosMascotas/FiltrosMascotas.jsx';
import SearchBarMascota from '../SearchBar/SearchBarMascota.jsx';
import loading from './img/loading_.gif';

export default function HomeMascotas() {
	let mascotasState = useSelector((state) => state.mascotas);
	const dispatch = useDispatch();
	const [filterSelected, setFilterSelected] = useState([]);

	useEffect(() => {
		dispatch(traerMascotas());
	}, [dispatch]);

	// Paginacion

	const [page, setPage] = useState(1);
	const showPerPage = 10;
	const lastOnPage = page * showPerPage;
	const firstOnPage = lastOnPage - showPerPage;
	const showMascotas = mascotasState.slice(firstOnPage, lastOnPage);

	function pagination(pageNumber) {
		setPage(pageNumber);
	}

	return (
		<div>
			<NavBar />
			<div>
				<FiltrosMascotas
					setFilterSelected={setFilterSelected}
					setPage={setPage}
					showMascotas={showMascotas}
				/>
				<SearchBarMascota />
			</div>

			<div className='containerMascotas'>
				{showMascotas.length > 0 ? (
					showMascotas.map((mascota) => (
						<Link key={mascota.id} to={`/mascotas/${mascota.id}`}>
							<CardMascotas
								imagen={mascota.imagen}
								nombre={mascota.nombre}
								edad={mascota.edad}
								sexo={mascota.sexo}
							/>
						</Link>
					))
				) : (
					<img src={loading} alt='loading' />
				)}
			</div>
			{!showMascotas.length > 0 ? null : (
				<div>
					<Pagination
						showPerPage={showPerPage}
						mascotasState={mascotasState.length}
						pagination={pagination}
						page={page}
					></Pagination>
				</div>
			)}
		</div>
	);
}
