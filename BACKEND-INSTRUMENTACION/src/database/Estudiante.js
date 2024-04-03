const { Estudiantes } = require("../models/Estudiante");

const getAllEstudiantes = async () => {
  try {
    const estudiantes = await Estudiantes.findAll();
    return estudiantes;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneEstudiante = async (Codigo) => {
  try {
    const estudiante = await Estudiantes.findByPk(Codigo);
    return estudiante;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const createNewEstudiante = async (newEstudiante) => {
  try {
    const createdEstudiante = await Estudiantes.create(newEstudiante);
    return createdEstudiante;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneEstudiante = async (Codigo, changes) => {
  try {
    const updatedEstudiante = await Estudiantes.update(changes, {
      where: { Codigo: Codigo },
    });
    return updatedEstudiante;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteEstudiante = async (Codigo) => {
  try {
    if (!(await Estudiantes.findByPk(Codigo))) {
      throw new Error("No se encontró el estudiante");
    }
    const deletedEstudiante = await Estudiantes.destroy({
      where: { Codigo: Codigo },
    });
    return deletedEstudiante;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllEstudiantes,
  getOneEstudiante,
  createNewEstudiante,
  updateOneEstudiante,
  deleteEstudiante,
};
