import * as React from 'react';
import { Box, Modal, Button, TextField, Typography, Grid } from '@mui/material';
import validaUser from '../../../../validaciones/ValidarUsuario';
import useApiRequest from '../../../../Hooks/api';
import AlertaContenido from '../../../../components/Alerts/alert';
import { useState, useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
};

export default function UserRegistro() {
  const [open, setOpen] = useState(false);
  const [Estudiante, setEstudiante] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [RepetirContra, setRepetirContra] = useState('');
  const { sendRequest, loading, error } = useApiRequest();
  const [alerta, setAlerta] = useState({ open: false, message: '', type: '' });
  const [shouldClearFields, setShouldClearFields] = useState(false);


  useEffect(() => {
    if (alerta.open) {
      const timeout = setTimeout(() => {
        setAlerta({ ...alerta, open: false });
        if (shouldClearFields) {
          setEstudiante('');
          setUsername('');
          setEmail('');
          setPassword('');
          setRepetirContra('');
          setShouldClearFields(false);
        }
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [alerta, shouldClearFields]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let datos = { username, email, password, Estudiante};

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validacion = validaUser({
      Usuario : username,
      Contraseña: password,
      RepetirContra,
    });

    if (Array.isArray(validacion)) {
      const mensajes = validacion.map((mensaje, index) => (
        <Typography key={index} component="div">{mensaje}</Typography>
      ));
      setAlerta({ open: true, message: <div>{mensajes}</div>, type: 'error' });
      return;
    }

    try {
      const url = 'http://localhost:3001/api/v1/auth/signup';
      await sendRequest(url, 'POST', datos );
      setAlerta({
        open: true,
        message: 'Usuario registrado',
        type: 'success',
      });
      setShouldClearFields(true);
    } catch (error) {
        
      setAlerta({
        open: true,
        message: "Error al registrar: " + (error.response ? error.response.data : error.message),
        type: 'error',
      });
    }

  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Registrar Usuario
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="user-registration-modal-title"
        aria-describedby="user-registration-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Registro de Usuario
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Cédula"
                  value={Estudiante}
                  onChange={(e) => setEstudiante(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  className='input'
                  label="Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  className='input'
                  label="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 className='input'
                  fullWidth
                  label="Contraseña"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Repetir Contraseña"
                  type="password"
                  value={RepetirContra}
                  onChange={(e) => setRepetirContra(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </form>
          <Box sx={{ width: '100%', position:'fixed', top:'50%', right:'0%',  transform: 'translateY(-50%)', zIndex: 9999 }}>
            <AlertaContenido
              open={alerta.open}
              message={alerta.message}
              type={alerta.type}
              onClose={() => setAlerta({ ...alerta, open: false })}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
