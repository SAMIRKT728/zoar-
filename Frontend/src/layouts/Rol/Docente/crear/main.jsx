 import React from 'react'
import { MainLayout } from '../Mainlayout'
import { Typography, Box} from '@mui/material'
import { TableEstudiante } from './components/TablaEstufiante'

export default function Crear() {
  return (
    <>

    <MainLayout >
        <Typography
        marginLeft={4}
        variant='h5'
        fontWeight="bold"
        marginTop={4}
        color={'Black'}
        >
            Tabla Estudiante
        </Typography>
        <Box sx={{  width:'100%', margin:'0%', padding:'0%', height:'100%'}}>
        <TableEstudiante/>
        </Box>
        
      
    </MainLayout>
    
    </>
  )
}
