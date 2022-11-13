import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {adminBorrarMascota, traerMascotas} from '../../../redux/actions';
import '../ListaMascotas/ListaMascotas.css';

function TablaMascotas({
	nombre,
	id,
	descripcion,
	imagen,
	edad,
	tamaño,
	raza,
	sexo,
	especie,
}) {
	const dispatch = useDispatch();
	const mascotas = useSelector((state) => state.mascotas);

	useEffect(() => {
		dispatch(traerMascotas());
	}, []);

	// Esta incompleto, aca abajo deberia agregarse funciones (EJ: eliminar, actualizar)

	const handleDelete = (e, id) => {
		e.preventDefault();
		dispatch(adminBorrarMascota(id));
	};

	const handleUpdate = () => {};

	return (
		<div className='conteinerTablaMascotas'>
			<table className='tabla-mascotas'>
				<thead className='theadMasctotas'>
					<tr className='nombres-columnas'>
						<th scope='col'>Nombre</th>
						<th scope='col'>Descripción</th>
						<th scope='col'>Imagen</th>
						<th scope='col'>Edad</th>
						<th scope='col'>Tamaño</th>
						<th scope='col'>Raza</th>
						<th scope='col'>Sexo</th>
						<th scope='col'>Especie</th>
						<th scope='col'>Borrar</th>
						<th scope='col'>Actualizar</th>
					</tr>
				</thead>
				<tbody className='tbodyMascotas'>
					{mascotas.map((mascota) => {
						return (
							<tr className='filas'>
								<td className='nombretablamascota'>{mascota.nombre}</td>
								<td className='descripciontablamascota'>
									{mascota.descripcion}
								</td>
								<td className='imagentablamascota'>{mascota.imagen}</td>
								<td className='edadtablamascota'>{mascota.edad}</td>
								<td className='tamañotablamascota'>{mascota.tamaño}</td>
								<td className='razatablamascota'>{mascota.raza}</td>
								<td className='sexotablamascota'>{mascota.sexo}</td>
								<td className='especietablamascota'>{mascota.especie}</td>
								<td className='borrartablamascota'>
									<button onClick={(e) => handleDelete(e, id)}>Borrar</button>
								</td>
								<td className='actualizartablamascota'>
									<button>Actualizar</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default TablaMascotas;
