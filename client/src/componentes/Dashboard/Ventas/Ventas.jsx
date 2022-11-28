import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Ventas() {
	const dispatch = useDispatch();
	const ventas = useSelector((state) => state.ordenes);

	return (
		<div className='container_tabla_dash'>
			<h2>VENTAS</h2>
			<table className='tabla-productos'>
				<thead>
					<tr className='tabla-head'>
						<th scope='col'>N° venta</th>
						<th scope='col'>Fecha</th>
						<th scope='col'>Usuario</th>
						<th scope='col'>Descripción</th>
						<th scope='col'>P. Unitario</th>
						<th scope='col'>Importe</th>
						<th scope='col'>Borrar</th>
					</tr>
				</thead>

				<tbody>
					{ventas?.map((venta) => {
						return (
							<tr>
								<td></td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Ventas;
