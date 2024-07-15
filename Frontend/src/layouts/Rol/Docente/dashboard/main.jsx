import { Box } from "@mui/material";
import { TableEstudiante } from "../crear/components/TablaEstufiante";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard(){
    const navigate = useNavigate();

    useEffect(() => {
        // Verificar si el token de acceso existe
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            // Redirigir a la ruta /signin si no hay token de acceso
            navigate("/signin");
        }
    }, [navigate]);

    return (
        <Box sx={{ width: '100vw' }}>
            <TableEstudiante />
        </Box>
    );
};

export default Dashboard;
