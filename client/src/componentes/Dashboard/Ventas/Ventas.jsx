import React from 'react';

function Ventas() {
	return (
		<div className='container_tabla_dash'>
			<h2>VENTAS</h2>
			<table className='tabla-productos'>
				<thead>
					<tr className='tabla-head'>
						<th scope='col'>N° venta</th>
						<th scope='col'>Fecha</th>
						<th scope='col'>Usuario</th>
						<th scope='col'>Cantidad</th>
						<th scope='col'>Descripción</th>
						<th scope='col'>P. Unitario</th>
						<th scope='col'>Importe</th>
						<th scope='col'>Borrar</th>
						<th scope='col'>Editar</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Ventas;
