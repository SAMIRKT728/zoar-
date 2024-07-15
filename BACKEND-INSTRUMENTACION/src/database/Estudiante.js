const { Estudiantes } = require("../models/Estudiante");

const getAllEstudiantes = async () => {
  try {
    const estudiantes = await Estudiantes.findAll();
    return estudiantes;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneEstudiante = async (Cedula) => {
  try {
    if (!(await Estudiantes.findByPk(Cedula))) {
      throw new Error("No se encontró el estudiante");
    }
    const estudiante = await Estudiantes.findByPk(Cedula);
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
    if (!(await Estudiantes.findByPk(Cedula))) {
      throw new Error("No se encontró el estudiante");
    }
    const updatedEstudiante = await Estudiantes.update(changes, {
      where: { Codigo: Codigo },
    });
    return updatedEstudiante;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteEstudiante = async (Cedula) => {
  try {
    if (!(await Estudiantes.findByPk(Cedula))) {
      throw new Error("No se encontró el estudiante");
    }
    const deletedEstudiante = await Estudiantes.destroy({
      where: { Cedula: Cedula },
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
