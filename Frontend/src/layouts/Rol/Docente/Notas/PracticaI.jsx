import React from 'react'
import { MainLayout } from '../Mainlayout'
import { Box, PaginationItem, Paper } from '@mui/material'
import { TableEstudiante } from './components/datatable';
import FormComponent from './components/FormComponentA';
import NestedModal from './components/modal';

export default function PracticaI() {
  const apiUrl = "http://localhost:3001/api/v1/estudiantes/";
  const columnConfig = [
      { name: 'Cedula', label: 'CEDULA' },
      { name: 'Nombre', label: 'NOMBRE' },
      { name: 'Estado', label: 'ESTADO' },
      { name: 'Grupo', label: 'GRUPO' },
      { name: 'Promedio', label: 'PROMEDIO' },
      { name: 'Accion', label: 'ACCION' },
  ];
  return (
    <MainLayout>
        PracticaI
<NestedModal/>
      
          <TableEstudiante apiUrl={apiUrl} columnConfig={columnConfig} />
        
    </MainLayout>
  )
}
