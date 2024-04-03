const { v4: uuid } = require("uuid");
const Docente = require("../database/Docente");

const getAllDocentes = async () => {
  try {
    const allDocentes = await Docente.getAllDocentes();
    return allDocentes;
  } catch (error) {
    throw error;
  }
};

const getOneDocente = async (Cedula) => {
  try {
    const docente = await Docente.getOneDocente(Cedula);
    return docente;
  } catch (error) {
    throw error;
  }
};

const createNewDocente = async (newDocente) => {
  try {
    const createdDocente = await Docente.createNewDocente(newDocente);
    return createdDocente;
  } catch (error) {
    throw error;
  }
};

const updateOneDocente = async (Cedula, changes) => {
  try {
    const updatedDocente = await Docente.updateOneDocente(Cedula, changes);
    return updatedDocente;
  } catch (error) {
    throw error;
  }
};

const deleteDocente = async (Cedula) => {
  try {
    const deletedDocente = await Docente.deleteDocente(Cedula);
    return deletedDocente;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllDocentes,
  getOneDocente,
  createNewDocente,
  updateOneDocente,
  deleteDocente,
};
