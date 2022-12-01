import React, { useEffect } from 'react';
import { Pie } from '@ant-design/charts';
import './Grafico.css';
import { useDispatch, useSelector } from 'react-redux';
import { traerMascotas } from '../../../../redux/actions';

export default function GraficoMascotas() {

    const mascotas = useSelector((state)=> state.mascotas);

    const dispatch= useDispatch()    
    useEffect(() => {
        dispatch(traerMascotas());
    }, []);

   const perros = mascotas.filter((e)=> e.especie === 'perro').length
   const gatos = mascotas.filter((e)=> e.especie === 'gato').length

    const dataPie = [
        {
          type: 'Perros',
          value: perros,
        },
        {
          type: 'Gatos',
          value: gatos,
        }
      ];
    
      const configPie = {
        appendPadding: 10,
        data: dataPie,
        angleField: 'value',
        colorField: 'type',
        height: 250,
        radius: 0.5,
        color: ['#d62728', '#2ca02c', '#000000'],
        label: {
          type: 'inner', 
          offset: '-0.5',
          content: '{name} {value}',
          style: {
            fill: 'black',
            fontSize: 14,
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