const Grupo = require("../database/Grupo");

const getAllGrupos = async () => {
  try {
    const allGrupos = await Grupo.getAllGrupos();
    return allGrupos;
  } catch (error) {
    throw error;
  }
};

const getOneGrupo = async (Codigo) => {
  try {
    const grupo = await Grupo.getOneGrupo(Codigo);
    return grupo;
  } catch (error) {
    throw error;
  }
};

const createNewGrupo = async (newGrupo) => {
  try {
    const createdGrupo = await Grupo.createNewGrupo(newGrupo);
    return createdGrupo;
  } catch (error) {
    throw error;
  }
};

const updateOneGrupo = async (Codigo, changes) => {
  try {
    const updatedGrupo = await Grupo.updateOneGrupo(Codigo, changes);
    return updatedGrupo;
  } catch (error) {
    throw error;
  }
};

const deleteGrupo = async (Codigo) => {
  try {
    const deletedGrupo = await Grupo.deleteGrupo(Codigo);
    return deletedGrupo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllGrupos,
  getOneGrupo,
  createNewGrupo,
  updateOneGrupo,
  deleteGrupo,
};
