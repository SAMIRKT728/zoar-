import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import AvatarWithFallback from "../../../../../components/Avatar/avatarname";
import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";



export const TableEstudiante = ()=>{

const [estudiante, setEstudiante] = useState ([])

const url = 'http://localhost:3001/api/v1/estudiantes/'



const getData = async()=>{
    const token = localStorage.getItem("jwt-token");

   const response =  await axios.get(url,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        
        setEstudiante(response.data.data);
   
}

useEffect(()=>{
    getData()
},[])

const columns =[
    {
        name:'imagen',
        label:'AVATAR',
        options: {
            customBodyRender: (value, tableMeta) => {
                const nombreCompleto = `${tableMeta.rowData[2]} ${tableMeta.rowData[3]}`;
                return <AvatarWithFallback name={nombreCompleto} src={value} />;
              },
          },
    },
    { name: 'Cedula', label: 'CEDULA' },
    { name: 'nombre', label: 'NOMBRE' },
    { name: 'apellido', label: 'APELLIDO' },
    { name: 'correo', label: 'CORREO' },
    { name: 'CodigoGrupo', label: 'GRUPO' },
  
]
const options = {
    rowsPerPage: 4, // Número de filas por página por defecto
    rowsPerPageOptions: [4, 5, 10, 15, 20], // Opciones para el número de filas por página
};
return(
    <Grid2 container sx={{ width:'100%', display:'flex', justifyContent:'center', alignItems:'center', }}   >
    <MUIDataTable  
    title={'Estudiantes'}
    data={estudiante}
    columns={columns}
    options={options}

    />
    </Grid2>

)
}
