import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {
	adminActualizarMascota,
	adminBorrarMascota,
	traerMascotas,
} from '../../../redux/actions';
import FormMascota from '../../Formulario/FormMascota';
import '../ListaMascotas/ListaMascotas.css';

function TablaMascotas() {
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

	return (
		<div className='container_tabla_dash'>
			<div className="nameTabla">
				<h2>MASCOTAS</h2>
			</div>
			<table className='tabla-mascotas'>
				<thead>
					<tr className='nombres-columnas'>
						<th scope='col'>Nombre</th>
						{/* <th scope='col'>Descripción</th> */}
						<th scope='col'>Id</th>
						<th scope='col'>Edad</th>
						<th scope='col'>Tamaño</th>
						<th scope='col'>Raza</th>
						<th scope='col'>Sexo</th>
						<th scope='col'>Especie</th>
						<th scope='col'>Borrar</th>
						<th scope='col'>Editar</th>
					</tr>
				</thead>
				<tbody className='tbodyMascotas'>
					{mascotas.map((mascota) => {
						return (
							<tr className='filas'>
								<td className='nombretablamascota'>{mascota.nombre}</td>
								{/* <td className='descripciontablamascota'>
									{mascota.descripcion}
								</td>
								<td className='imagentablamascota'>{mascota.imagen}</td> */}
								<td className='idtablamascota'>{mascota.id}</td>
								<td className='edadtablamascota'>{mascota.edad}</td>
								<td className='tamañotablamascota'>{mascota.tamaño}</td>
								<td className='razatablamascota'>{mascota.raza}</td>
								<td className='sexotablamascota'>{mascota.sexo}</td>
								<td className='especietablamascota'>{mascota.especie}</td>
								<td className='borrartablamascota'>
									<button onClick={(e) => handleDelete(e, e.id)}>Borrar</button>
								</td>
								<td className='actualizartablamascota'>
									<Link to={`dashboard/formActualizarMascota/${mascota.id}`}>
										<button>Editar</button>
									</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<FormMascota />
			{/* <form>
				<h2>Crear nueva mascota</h2>
				<label>Nombre</label>
				<input type='text'></input>
				<label>Descripción</label>
				<input type='text'></input>
				<label>Imagen</label>
				<input type='text'></input>
				<label>Edad</label>
				<input type='number'></input>
				<label>Tamaño</label>
				<select></select>
				<label>Raza</label>
				<input type='text'></input>
				<label>Sexo</label>
				<select></select>
				<label>Raza</label>
				<input type='text'></input>
				<label>Especie</label>
				<select></select>
				<button>CREAR</button>
			</form> */}
		</div>
	);
}

export default TablaMascotas;
