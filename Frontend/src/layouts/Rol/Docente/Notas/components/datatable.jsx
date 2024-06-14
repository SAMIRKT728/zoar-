import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import { Box, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const TableEstudiante = ({ apiUrl, columnConfig }) => {
    const [estudiante, setEstudiante] = useState([]);

    const getData = async () => {
        const token = localStorage.getItem("jwt-token");

        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        setEstudiante(response.data.data);
    };

    useEffect(() => {
        getData();
    }, [apiUrl]);

    const columns = columnConfig.map(column => {
        if (column.name === 'Accion') {
            return {
                name: column.name,
                label: column.label,
                options: {
                    customBodyRender: (value, tableMeta) => (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => alert(`Acción en la fila ${tableMeta.rowIndex + 1}`)}
                        >
                            Acción
                        </Button>
                    ),
                },
            };
        }
        return column;
    });

    const options = {
        rowsPerPage: 4,
        rowsPerPageOptions: [4, 5, 10, 15, 20],
    };

    return (
        <Grid2
            container
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
     
                <MUIDataTable
                    title={'Estudiantes'}
                    data={estudiante}
                    columns={columns}
                    options={options}
                />
        </Grid2>
    );
};

// Ejemplo de cómo usar el componente con URL y columnas dinámicas
