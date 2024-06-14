import React from 'react';
import { Alert, AlertTitle, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

function Icon({ type }) {
  return type === 'success' ? <CheckCircleIcon /> : <ErrorIcon />;
}

export function AlertaContenido({ open, message, type, onClose }) {
  if (!open) return null;

  return (
    <Alert
      severity={type === 'success' ? 'success' : 'error'}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={onClose}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
      icon={<Icon type={type} />}
      style={{ maxWidth: '600px', margin: 'auto' }}
    >
      <AlertTitle>{type === 'success' ? 'Success' : 'Error'}</AlertTitle>
      <Typography>{message}</Typography>
    </Alert>
  );
}

export default AlertaContenido;
