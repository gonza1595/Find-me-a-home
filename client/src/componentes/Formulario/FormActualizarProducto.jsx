import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

function FormActualizarProducto() {
	const dispatch = useDispatch();

	//////////// Aca deberia ir el useSelector

	const [product, setProduct] = useState({
		nombre,
		descripcion,
		imagen,
		stock,
		precio,
		calificacion,
		tipo,
	});

	function handleSubmit(e) {
		if (
			!product.nombre ||
			!product.descripcion ||
			!product.stock ||
			!product.imagen ||
			!product.precio ||
			!product.precio
		) {
			e.preventDefault();
			alert('Verifique los campos para poder continuar');
		} else {
			e.preventDefault();
			dispatch(formularioPostMascota(input));
			alert('Su mascota ha sido posteado exitosamente');
			history.push('/'); //fijarse si se deja o no

			setInput({
				nombre: '',
				descripcion: '',
				imagen: '',
				stock: '',
				precio: '',
				calificacion: '',
				tipo: '',
			});
		}
	}

	function handleChange(e) {
		e.preventDefault();
		setProduct((prev) => ({...prev, [e.target.name]: e.target.value}));
	}

	return (
		<div className={`cont ${modo}`}>
		<div className={`createFormMascota ${modo}`}>			
		<div className="darkMode">
          <Dark />
        </div>
		<h1 className="tituloFormMascota">POSTEAR MASCOTA</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className='containerFormMascotas'>
					<label> Nombre: </label>
					<input
						type='text'
						autoComplete='off'
						// value={input.nombre}
						name='nombre'
						onChange={handleChange}
						className='inputFormMascotas'
					></input>
				</div>
				<div className='containerFormMascotas'>
					<label>Descripcion: </label>
					<input
						type='text'
						autoComplete='off'
						// value={input.descripcion}
						name='descripcion'
						onChange={handleChange}
						className='inputFormMascotas'
					></input>
				</div>
				<div className='containerFormMascotas'>
					<label>Imagen: </label>
					<input
						type='text'
						autoComplete='off'
						// value={input.imagen}
						name='imagen'
						onChange={handleChange}
						className='inputFormMascotas'
					></input>
				</div>
				<div className='containerFormMascotas'>
					<label>Stock: </label>
					<input
						type='number'
						autoComplete='off'
						// value={input.edad}
						name='edad'
						onChange={handleChange}
						className='inputFormMascotas'
					></input>
				</div>
				<div className='containerFormMascotas'>
					<label>Precio: </label>
					<input
						type='text'
						autoComplete='off'
						value={input.raza}
						name='raza'
						onChange={handleChange}
						className='inputFormMascotas'
					></input>
				</div>
				<div className='containerFormMascotas'>
					<label>Calificación: </label>
					<input
						type='text'
						autoComplete='off'
						// value={input.raza}
						name='calificacion'
						onChange={handleChange}
						className='inputFormMascotas'
					></input>
				</div>
				<div className='containerFormMascotas'>
					<label>Tipo: </label>
					<label>
						<input
							type='radio'
							autoComplete='off'
							value='Paseo'
							name='tipo'
							onClick={(e) => handleCheck(e)}
						/>{' '}
						Paseo{' '}
					</label>
					<label>
						<input
							type='radio'
							autoComplete='off'
							value='Alimentación'
							name='sexo'
							onClick={(e) => handleCheck(e)}
						/>{' '}
						Alimentación{' '}
					</label>
					{errors.sexo && <p>{errors.sexo}</p>}
					<label>
						<input
							type='radio'
							autoComplete='off'
							value='Juguetes'
							name='tipo'
							onClick={(e) => handleCheck(e)}
						/>{' '}
						Juguetes{' '}
					</label>
				</div>
				<div>
					<button type='submit'> Actualizar </button>
				</div>
			</form>
		</div>
		</div>
	);
}

export default FormActualizarProducto;
