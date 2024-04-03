const { Docentes } = require("../models/Docente");

const getAllDocentes = async () => {
  try {
    const docentes = await Docentes.findAll();
    return docentes;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneDocente = async (Cedula) => {
  try {
    const docente = await Docentes.findByPk(Cedula);
    return docente;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const createNewDocente = async (newDocente) => {
  try {
    const createdDocente = await Docentes.create(newDocente);
    return createdDocente;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneDocente = async (Cedula, changes) => {
  try {
    const updatedDocente = await Docentes.update(changes, {
      where: { Cedula: Cedula },
    });
    return updatedDocente;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteDocente = async (Cedula) => {
  try {
    if (!(await Docentes.findByPk(Cedula))) {
      throw new Error("No se encontró el docente");
    }
    const deletedDocente = await Docentes.destroy({
      where: { Cedula: Cedula },
    });
    return deletedDocente;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllDocentes,
  getOneDocente,
  createNewDocente,
  updateOneDocente,
  deleteDocente,
};
