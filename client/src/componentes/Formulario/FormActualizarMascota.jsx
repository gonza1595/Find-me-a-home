import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import './FormMascota.css';

function FormActualizarMascota() {
	const dispatch = useDispatch();
	// const {id} = useParams();
	const actualizarMascota = useSelector((state) => state.actualizarMascota);

	// mandando fruta
	const [input, setInput] = useState({
		nombre: actualizarMascota.nombre,
		descripcion: actualizarMascota.descripcion,
		imagen: actualizarMascota.imagen,
		edad: actualizarMascota.edad,
		raza: actualizarMascota.raza,
		sexo: '',
		especie: '',
		tamaño: '',
		//arreglo de Pet
	});

	function handleSubmit(e) {
		if (
			!input.especie ||
			!input.sexo ||
			!input.raza ||
			!input.tamaño ||
			!input.edad ||
			!input.imagen ||
			!input.descripcion ||
			!input.nombre
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
				edad: '',
				raza: '',
				sexo: '',
				especie: '',
			});
		}
	}

	function handleChange(e) {
		e.preventDefault();
		setInput((prev) => ({...prev, [e.target.name]: e.target.value}));
	}

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className='containerFormMascotas'>
					<label> Nombre: </label>
					<input
						type='text'
						autoComplete='off'
						value={input.nombre}
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
						value={input.descripcion}
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
						value={input.imagen}
						name='imagen'
						onChange={handleChange}
						className='inputFormMascotas'
					></input>
				</div>
				<div className='containerFormMascotas'>
					<label>Edad: </label>
					<input
						type='number'
						autoComplete='off'
						value={input.edad}
						name='edad'
						onChange={handleChange}
						className='inputFormMascotas'
					></input>
				</div>
				<div className='containerFormMascotas'>
					<label>Raza: </label>
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
					<label>Sexo: </label>
					<label>
						<input
							type='radio'
							autoComplete='off'
							value='masculino'
							name='sexo'
							onClick={(e) => handleCheck(e)}
						/>{' '}
						Masculino{' '}
					</label>
					<label>
						<input
							type='radio'
							autoComplete='off'
							value='femenino'
							name='sexo'
							onClick={(e) => handleCheck(e)}
						/>{' '}
						Femenino{' '}
					</label>
					{errors.sexo && <p>{errors.sexo}</p>}
				</div>
				<div className='containerFormMascotas'>
					<label>Especie: </label>
					<label>
						<input
							type='radio'
							autoComplete='off'
							value='perro'
							name='especie'
							onClick={(e) => handleCheck(e)}
						/>{' '}
						Perro{' '}
					</label>
					<label>
						<input
							type='radio'
							autoComplete='off'
							value='gato'
							name='especie'
							onClick={(e) => handleCheck(e)}
						/>{' '}
						Gato{' '}
					</label>
				</div>
				<div className='containerFormMascotas'>
					<label className=''>Tamaño: </label>
					<label>
						<input
							type='radio'
							autoComplete='off'
							value='pequeño'
							name='tamaño'
							onClick={(e) => handleCheck(e)}
						/>{' '}
						Pequeño{' '}
					</label>
					<label>
						<input
							type='radio'
							autoComplete='off'
							value='mediano'
							name='tamaño'
							onClick={(e) => handleCheck(e)}
						/>{' '}
						Mediano{' '}
					</label>
					<label>
						<input
							type='radio'
							autoComplete='off'
							value='grande'
							name='tamaño'
							onClick={(e) => handleCheck(e)}
						/>{' '}
						Grande{' '}
					</label>
				</div>
				<div>
					<button type='submit'> Actualizar </button>
				</div>
			</form>
		</div>
	);
}

export default FormActualizarMascota;
