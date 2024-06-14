import React, { useState } from 'react';
import { Container, Box, Typography, Grid, TextField, Button } from '@mui/material';
import Logo from '../../../assets/logo.ico';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

import './sign.css';

function LoginForm() {
  let rutaPlan = "/estudiante1";

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (username === '' || password === '') {
      setModalMessage('Todos los campos deben ser llenados');
      setShowModal(true);

      return;
    }

  /*  const emailRegExp = /^[^\s@]+@unicesar\.edu\.co$/;
    if (!emailRegExp.test(username)) {
      setModalMessage('Por favor ingresa un correo institucional válido');
      setShowModal(true);
      return;
    }
*/
    try {

      const url = 'http://localhost:3001/api/v1/auth/signin';
      let credentials = { username, password };
      const res = await axios.post(url, credentials);
      const token = res.data.data.token;
      localStorage.setItem('jwt-token', token);
      setModalMessage('Inicio de sesión correcto');
      setShowModal(true);
      setTimeout(() => {
        navigate(rutaPlan);
        ;
      }, 1500);
    } catch (error) {
      console.error(error); // Imprime el error en la consola
      setModalMessage(`Usuario y/o contraseña incorrectos, o no tiene cuenta de Administrador. Error: ${error.message}`);
      setShowModal(true);
    }
    
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container maxWidth= "100vw" sx={{ height: "100vh", margin:'0', width: "100vw", display: "flex",justifyContent: "center", alignItems: "center" }} > 
      <Grid container position='relative' sx={{width:'800px'}} className="container-form">
        <Grid item xs={0} md={6} lg={6} className="information">
          <Box className="info-childs">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Practicas<br />Instrumentación<br />Quirúrgica
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}className="form-information">
          <Box className="form-information-childs" sx={{width:'100%',height:'100%',borderRadius:'20px', backdropFilter:'blur(30px)'}}>
            <img src={Logo} alt="Logo" className="ico" />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Inicio de sesión
            </Typography>
            <form  onSubmit={handleSubmit} className="form" >
              <div className="form-label" style={{ paddingBottom: '5px',textAlign: 'center' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 2 }} />
                <TextField
                 // type="email"
                  label="Correo institucional"
                  variant='standard'
                  id="email"
                  size="small"
                  color='error'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input"
                />
              </div>
              <div  className="form-label" style={{ paddingBottom: '5px',textAlign: 'center'  }}>
              <Lock sx={{ color: 'action.active', mr: 1, my: 2 }} />
                <TextField
                  type="password"
                  label="Identificación"
                  variant='standard'
                  color='error'
                  id="password"
                  size="small"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                />
              </div>
              <Button sx={{borderRadius:'20px'}}type="submit" variant="contained"   className="submit-button">
                Iniciar 
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <Typography  variant="body1" color={'secondary'}>{modalMessage}</Typography>
          </div>
        </div>
      )}
    </Container>
  );
}

export default LoginForm;
