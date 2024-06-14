
import {Typography, Container, Grid} from '@mui/material'
import FormDocentes from './components/formRegistro'; 
import { MainLayout } from '../Mainlayout';

function Docentes(){

    return(
        <> 

        <MainLayout >
            <Typography
            position={'relative'}
            left={4}
            variant='h5'
            fontWeight="bold"
            top={4}
            color={'Black'}
            >
                Crear Estudiante
            </Typography>
            <Grid container sx={{ width:'100%'}} >
                <FormDocentes/>
            </Grid>
        </MainLayout>
        
        </>
    );
}


export default Docentes;
