const Estudiante = require("../database/Estudiante");

const getAllEstudiantes = async () => {
  try {
    const allEstudiantes = await Estudiante.getAllEstudiantes();
    return allEstudiantes;
  } catch (error) {
    throw error;
  }
};

const getOneEstudiante = async (Cedula) => {
  try {
    const estudiante = await Estudiante.getOneEstudiante(Cedula);
    return estudiante;
  } catch (error) {
    throw error;
  }
};

const createNewEstudiante = async (newEstudiante) => {
  try {
    const createdEstudiante = await Estudiante.createNewEstudiante(newEstudiante);
    return createdEstudiante;
  } catch (error) {
    throw error;
  }
};

const updateOneEstudiante = async (Codigo, changes) => {
  try {
    const updatedEstudiante = await Estudiante.updateOneEstudiante(Codigo, changes);
    return updatedEstudiante;
  } catch (error) {
    throw error;
  }
};

const deleteEstudiante = async (Cedula) => {
  try {
    const deletedEstudiante = await Estudiante.deleteEstudiante(Cedula);
    return deletedEstudiante;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllEstudiantes,
  getOneEstudiante,
  createNewEstudiante,
  updateOneEstudiante,
  deleteEstudiante,
};
