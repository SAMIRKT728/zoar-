const { LugaresDePractica } = require("../models/Lugares");

const getAllLugaresDePractica = async () => {
  try {
    const lugaresDePractica = await LugaresDePractica.findAll();
    return lugaresDePractica;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneLugarDePractica = async (NIT) => {
  try {
    const lugarDePractica = await LugaresDePractica.findByPk(NIT);
    return lugarDePractica;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const createNewLugarDePractica = async (newLugarDePractica) => {
  try {
    const createdLugarDePractica = await LugaresDePractica.create(newLugarDePractica);
    return createdLugarDePractica;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneLugarDePractica = async (NIT, changes) => {
  try {
    const updatedLugarDePractica = await LugaresDePractica.update(changes, {
      where: { NIT: NIT },
    });
    return updatedLugarDePractica;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteLugarDePractica = async (NIT) => {
  try {
    if (!(await LugaresDePractica.findByPk(NIT))) {
      throw new Error("No se encontró el lugar de práctica");
    }
    const deletedLugarDePractica = await LugaresDePractica.destroy({
      where: { NIT: NIT },
    });
    return deletedLugarDePractica;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllLugaresDePractica,
  getOneLugarDePractica,
  createNewLugarDePractica,
  updateOneLugarDePractica,
  deleteLugarDePractica,
};
