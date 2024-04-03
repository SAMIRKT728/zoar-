const { Grupos } = require("../models/Grupo");

const getAllGrupos = async () => {
  try {
    const grupos = await Grupos.findAll();
    return grupos;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneGrupo = async (Codigo) => {
  try {
    const grupo = await Grupos.findByPk(Codigo);
    return grupo;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const createNewGrupo = async (newGrupo) => {
  try {
    const createdGrupo = await Grupos.create(newGrupo);
    return createdGrupo;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneGrupo = async (Codigo, changes) => {
  try {
    const updatedGrupo = await Grupos.update(changes, {
      where: { Codigo: Codigo },
    });
    return updatedGrupo;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteGrupo = async (Codigo) => {
  try {
    if (!(await Grupos.findByPk(Codigo))) {
      throw new Error("No se encontró el grupo");
    }
    const deletedGrupo = await Grupos.destroy({
      where: { Codigo: Codigo },
    });
    return deletedGrupo;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllGrupos,
  getOneGrupo,
  createNewGrupo,
  updateOneGrupo,
  deleteGrupo,
};
