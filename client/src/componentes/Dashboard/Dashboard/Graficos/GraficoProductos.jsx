import React, { useEffect } from 'react';
import { Pie } from '@ant-design/charts';
import './Grafico.css';
import { useDispatch, useSelector } from 'react-redux';
import { traerMascotas, traerProductos, traerUsuarios } from '../../../../redux/actions';

export default function GraficoProductos() {
    
    const productos = useSelector((state) => state.productos);
    const mascotas = useSelector((state)=> state.mascotas);
    const usuarios = useSelector((state)=> state.usuarios);


    const dispatch= useDispatch()    
    useEffect(() => {
        dispatch(traerProductos());
        dispatch(traerMascotas());
        dispatch(traerUsuarios());
    }, []);

   const paseo = productos.filter((e)=> e.tipo === 'Paseo').length
   const alimentacion = productos.filter((e)=> e.tipo === 'Alimentación').length
   const juguetes = productos.filter((e)=> e.tipo === 'Juguetes').length

    const dataPie = [
        {
          type: 'Paseo',
          value: paseo,
        },
        {
          type: 'Alimentación',
          value: alimentacion,
        },
        {
          type: 'Juguetes',
          value: juguetes,
        } 
      ];
    
      const configPie = { 
        appendPadding: 10,
        data: dataPie,
        angleField: 'value',
        colorField: 'type',
        height: 250,
        radius: 0.5,
        label: {
          type: 'inner',
          offset: '-0.5',
          content: '{name} {value}',
          style: {
            fill: 'black', 
            fontSize: 14,
            textDecoration: 'bold',
            textAlign: 'center',
          },
        },
      };

    return (
        <Pie {...configPie} 
        style={{ 
            // backgroundColor: '#c5f5f2',
        }} />      
    );
}