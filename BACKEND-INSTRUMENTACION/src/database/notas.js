const { Practicas, PracticaIV } = require("../models/notas");

// Función genérica para obtener todos los registros
const getAll = async (model) => {
  try {
    const records = await model.findAll();
    return records;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

// Función genérica para obtener un registro por ID
const getOne = async (model, id) => {
  try {
    const record = await model.findByPk(id);
    return record;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

// Función genérica para crear un nuevo registro
const createNew = async (model, newRecord) => {
  try {
    const createdRecord = await model.create(newRecord);
    return createdRecord;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

// Función genérica para actualizar un registro por ID
const updateOne = async (model, id, changes) => {
  try {
    const updatedRecord = await model.update(changes, {
      where: { Codigo: id },
    });
    return updatedRecord;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

// Función genérica para eliminar un registro por ID
const deleteOne = async (model, id) => {
  try {
    if (!(await model.findByPk(id))) {
      throw new Error("No se encontró el registro");
    }
    const deletedRecord = await model.destroy({
      where: { Codigo: id },
    });
    return deletedRecord;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAll,
  getOne,
  createNew,
  updateOne,
  deleteOne,
};
