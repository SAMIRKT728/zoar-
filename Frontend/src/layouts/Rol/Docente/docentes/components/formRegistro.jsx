  import React from 'react';
  import { TextField, Grid, Paper, Button, Box, MenuItem, Stack, Typography } from '@mui/material';
  import { styled } from '@mui/material/styles';
  import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
  import Switch from '@mui/material/Switch';
  import { useState, useEffect } from 'react';
  import AlertaContenido from '../../../../../components/Alerts/alert';
  import useApiRequest from '../../../../../Hooks/api';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const Rol = [
    {
      value: 'Admin',
      label: 'Admin',
    },
    {
      value: 'Docente',
      label: 'Docente',
    },
    {
      value: 'Estudiante',
      label: 'Estudiante',
    }
  ]

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const MAX_IMAGE_SIZE = 3 * 1024 * 1024; // 3 MB en bytes


  const FormDocentes = () => {
    const [alerta, setAlerta] = useState({ open: false, message: '', type: '' });


    const [Cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [CodigoGrupo, setCodigoGrupo] = useState('');
    const [imagen, setImagen] = useState(null);
    const [rol, setRol] = useState('');
    const { sendRequest, loading, error } = useApiRequest();


    useEffect(() => {
      if (alerta.open) {
        const timeout = setTimeout(() => {
          setAlerta({ ...alerta, open: false });
        }, 3000);
  
        return () => clearTimeout(timeout);
      }
    }, [alerta]);



    const handleImageChange = (ev) => {
      setImagen(ev.target.files[0]);
    };

    const handleSubmit = async (ev) => {
      ev.preventDefault();
      if (!Cedula || !nombre || !apellido || !correo || !CodigoGrupo || !imagen) {
        setAlerta({ open: true, message: 'Llenar todos los campos', type: 'error' });
        return;
      }
      const formData = new FormData();
      formData.append('Cedula', Cedula);
      formData.append('nombre', nombre);
      formData.append('apellido', apellido);
      formData.append('correo', correo);
      formData.append('CodigoGrupo', CodigoGrupo);
      formData.append('file', imagen);

      try {
        const url = 'http://localhost:3001/api/v1/estudiantes/';
        await sendRequest(url, 'POST', formData, { 'Content-Type': 'multipart/form-data' });
          setAlerta({ open: true, message: 'Estudiante registrado', type: 'success' });
          setCedula('');
          setNombre('');
          setApellido('');
          setCorreo('');
          setCodigoGrupo('');
          setImagen(null);

      } catch (error) {
        setAlerta({ open: true,  message: 'No se pudo procesar la solicitud', type: 'error' });

      }
    
    };

    
    return (
      <Grid2
        container
        spacing={0}
        sx={{ padding:'0', margin:'0'}}
      >
        
      <div>
        
          <form onSubmit={handleSubmit}>
            <Grid2 container sx={{width:'100%'}}marginTop={4} marginLeft={0}  padding={0}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Grid2    md={6} xs={12} >
                <Paper
                  sx={{
                    width: "54%",
                    height: "90%",
                    left:'5%',
                    textAlign: "center",
                  }}
                >
                  <Button 
                    sx={{
                      textAlign: "center",

                      backgroundColor:'#F6F7F8',
                      textTransform: "none",
                      marginTop: "50px",
                      borderRadius: "50%", // Hace que el botón sea redondo
                      width: "100px",
                      height: "100px",
                      boxShadow:'none',
                      '&:hover': { // Elimina los estilos de hover
                        backgroundColor: '#e3e4e5', // Hace que el fondo sea transparente
                      },
                      '&:focus': { // Elimina los estilos de foco
                        outline: 'none', // Elimina el contorno de enfoque
                      },
                    }}
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                  >
                    <Stack spacing={1} alignItems="center">
                      {" "}
                      <AddAPhotoIcon sx={{ fontSize: 25, color:'grey'}} /> {/* Icono */}
                      <Box sx={{ fontSize: 12, color:'grey'}}>Subir Foto</Box> {/* Texto */}
                    </Stack>
                    <VisuallyHiddenInput type="file" onChange={handleImageChange} />
                  </Button>
                    <Box marginTop={'10px'}>
                    <Typography variant='caption'  color={'GrayText'}>
                    Permitido : *.jpeg, *.jpg, *.png, *.gif <br /> max size of 3 Mb
                    
                  </Typography>
                    </Box >
                    <Box textAlign='left' marginTop={'60px'}>
                    <Typography variant='h7'  color={'black'} sx={{ fontWeight: 'bold' }}>
                    Verificar Email          <Switch {...label} defaultChecked />
                    <br />
                  </Typography>
                  <Typography variant='h7'   sx={{ color: '#A7B1BC' }}>
                  Deshabilitar esto enviará automáticamente al usuario un correo electrónico de verificación.
                  </Typography>
                    </Box>

                </Paper>
              </Grid2>
              <Grid2 md={6} xs={12} >
                <Paper  sx={{ width:'130%', right: "35%" }}>
                  <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                      <TextField
                        className='input'
                        label="Cedula"
                        variant="outlined"
                        fullWidth
                        value={Cedula}
                        onChange={(e) => setCedula(e.target.value)}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        className='input'
                        label="Grupo"
                        variant="outlined"
                        fullWidth
                        value={CodigoGrupo}
                        onChange={(e) => setCodigoGrupo(e.target.value)}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        className='input'
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                      className='input'
                        label="Apellido"
                        variant="outlined"
                        fullWidth
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                      />
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <TextField
                        className='input'
                        label="Correo"
                        variant="outlined"
                        fullWidth
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        select
                        label="Rol"
                        variant="outlined"
                        fullWidth
                        value={rol}
                        onChange={(e) => setRol(e.target.value)}
                        helperText="Por favor selecciona un rol"
                      >
                        {Rol.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        label="Usuario"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        label="Contraseña"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Confirmar Contraseña"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  {/* Botón */}
                  <Box style={{ textAlign: "right", marginTop: "20px" }}>
                    <Button
                      type="submit"
                      style={{
                        textTransform: "none",
                        borderRadius: "10px",
                        fontWeight: "1000",
                      }}
                      variant="contained"
                    >
                      Crear Estudiante
                    </Button>
                  </Box>
                </Paper>
              </Grid2>
            </Grid2>
          </form>

          </div> 
          <Box  sx={{width:'50%',top:'50%',left:'40%',position:'fixed',transform: 'translateY(-50%)', zIndex: 9999}}>
          <AlertaContenido 
          open={alerta.open}
          message={alerta.message}
          type={alerta.type}
          onClose={() => setAlerta({ ...alerta, open: false })}/> 
          </Box>
  

      </Grid2>
    );
  };

  export default FormDocentes;
