import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {traerMascotas} from '../../../redux/actions';

function ListaMascotas() {
	const dispatch = useDispatch();
	const mascotas = useSelector((state) => state.allMascotas);

	useEffect(() => {
		dispatch(traerMascotas());
	}, []);

	// Esta incompleto, aca abajo deberia agregarse funciones (EJ: eliminar, actualizar)

	const handleDelete = () => {};

	const handleUpdate = () => {};

	return (
		<div>
			<table>
				<thead>
					<tr>
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
				<tbody>
					{mascotas.map((mascota) => {
						return (
							<tr>
								<td>{mascota.nombre}</td>
								<td>{mascota.descripcion}</td>
								<td>{mascota.imagen}</td>
								<td>{mascota.edad}</td>
								<td>{mascota.tamaño}</td>
								<td>{mascota.raza}</td>
								<td>{mascota.sexo}</td>
								<td>{mascota.especie}</td>
								<td>
									<button>Borrar</button>
								</td>
								<td>
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

export default ListaMascotas;
