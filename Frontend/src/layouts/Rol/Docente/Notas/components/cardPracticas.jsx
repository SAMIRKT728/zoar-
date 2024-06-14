import * as React from 'react';
import {Grid,Box} from '@mui/material';
import ActionAreaCard from '../../../../../components/card';

 function PracticasPage() {
  const practicas = [
    {
      image: 'https://i.pinimg.com/236x/f6/a5/93/f6a593dbccc9db22e02592955e4e7210.jpg',
      title: 'Practica I',
      description: 'Descripción de la Practica I',
      link: '/practicaI'
    },
    {
      image: 'https://i.pinimg.com/236x/7c/0c/57/7c0c5743f930969587e72914e1492edb.jpg',
      title: 'Practica II',
      description: 'Descripción de la Practica II',
      link: '/practicaII'
    },
    {
      image: 'https://i.pinimg.com/236x/7f/33/a2/7f33a22c76cae27cc84c3403e6ba827a.jpg',
      title: 'Practica III',
      description: 'Descripción de la Practica III',
      link: '/practicaIII'
    },
    {
      image: 'https://i.pinimg.com/236x/71/cf/96/71cf96b5062be8acaae371bfbe3a13a5.jpg',
      title: 'Practica IV',
      description: 'Descripción de la Practica IV',
      link: '/practicaIV'
    }
  ];

  return (
    <Grid container  spacing={0}>
      {practicas.map((practica, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <ActionAreaCard {...practica} />
        </Grid>
      ))}
    </Grid>
   

  );
}
export default PracticasPage;