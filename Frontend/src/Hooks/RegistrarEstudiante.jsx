import React from 'react';

const RegistrarEstudiante = ({ cedula, nombre, apellido, correo, CodigoGrupo, imagen }) => {
  const validateInputs = () => {
    const errors = [];
    const Estudiante = {};

    // Validar cédula
    if (!cedula || typeof cedula !== 'string' || cedula.length < 5 || cedula.length > 11) {
      errors.push('La cédula debe ser una cadena de texto entre 5 y 11 caracteres.');
    } else {
      Estudiante.cedula = cedula;
    }

    // Validar nombre
    if (!nombre || typeof nombre !== 'string') {
      errors.push('El nombre es obligatorio y debe ser una cadena de texto.');
    } else {
      Estudiante.nombre = nombre;
    }

    // Validar apellido
    if (!apellido || typeof apellido !== 'string') {
      errors.push('El apellido es obligatorio y debe ser una cadena de texto.');
    } else {
      Estudiante.apellido = apellido;
    }

    // Validar correo
    const correoRegex = /^[a-zA-Z0-9._%+-]+@unicesar\.edu\.co$/;
    if (!correo || !correoRegex.test(correo)) {
      errors.push('El correo es obligatorio y debe tener el formato correcto (@unicesar.edu.co).');
    } else {
      Estudiante.correo = correo;
    }

    // Validar Código de Grupo
    const codigoGrupoRegex = /^[1-9][0-9]$/;
    if (!CodigoGrupo || !codigoGrupoRegex.test(CodigoGrupo)) {
      errors.push('El Código de Grupo debe ser un número positivo de dos dígitos.');
    } else {
      Estudiante.CodigoGrupo = CodigoGrupo;
    }

    Estudiante.imagen = imagen; // Imagen puede ser vacío

    if (errors.length > 0) {
      return errors;
    } else {
      return Estudiante;
    }
  };

 
};

export default RegistrarEstudiante;
