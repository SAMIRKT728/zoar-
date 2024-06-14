import { Typography, Box } from "@mui/material";
import { MainLayout } from "../Mainlayout";
import Formulario from "./components/FormComponentA";
import PracticasPage from "./components/cardPracticas";

function Notas(){

    return(
        <MainLayout >
        <Box maxHeight={'100%'} maxWidth={'100%'}>

            <Box>
        <Typography
        marginLeft={4}
        variant='h5'
        fontWeight="bold"
        marginTop={4}
        marginBottom={4}
        color={'Black'}
        >
        Registro de Notas
        </Typography>
            </Box>
        <PracticasPage  />

        </Box>

       
    </MainLayout>
    )
}

export default Notas;