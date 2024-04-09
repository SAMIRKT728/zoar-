import React from 'react';
import { TextField, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomPaper = styled(Paper)({
  padding: 20,
  backgroundColor: '#ffffff',
  borderRadius: 10,
  position:'absolute',
  width:'500px', 
  justifyContent:'center',
  justifyItems:'center',
  alignItems:'center',
  alignContent:'center',
  right:'5%',
  margin:'0',
  top:'30%'
});

const FormDocentes = () => {
  return (
    <Grid container justifyContent='flex-end' sx={{backgroundColor:'blue'}}  >
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <CustomPaper>
          <form> 
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField label="Campo 1" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Campo 2" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Campo 3" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Campo 4" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Campo 5" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Campo 6" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Campo 7" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Campo 8" variant="outlined" fullWidth />
              </Grid>
            </Grid>
          </form>
        </CustomPaper>
      </Grid>
    </Grid>
  );
};

export default FormDocentes;
