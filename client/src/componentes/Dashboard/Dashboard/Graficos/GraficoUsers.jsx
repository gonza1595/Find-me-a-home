import React, { useEffect } from 'react';
import { Pie } from '@ant-design/charts';
import './Grafico.css';
import { useDispatch, useSelector } from 'react-redux';
import { traerUsuarios } from '../../../../redux/actions';
import { AutoComplete } from 'antd';

export default function GraficoUsers() {

    const usuarios = useSelector((state)=> state.usuarios);

    const dispatch= useDispatch()    
    useEffect(() => {
        dispatch(traerUsuarios());
    }, []);

   const usuario = usuarios.filter((e)=> e.rango === 'usuario').length
   const refugio = usuarios.filter((e)=> e.rango === 'refugio').length

    const dataPie = [
        {
          type: 'Usuarios',
          value: usuario,
        },
        {
          type: 'Refugios',
          value: refugio,
        }
      ];
    
      const configPie = {
        appendPadding: 10,
        data: dataPie,
        angleField: 'value',
        colorField: 'type',
        height: 250,
        radius: 0.5,
        color: ['#e69528', '#2cf02c'],
        label: {
          type: 'inner',
          offset: '-0.5',
          content: '{name} {value}',
          style: {
            fill: 'black',
            fontSize: 16,
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