const PracticasService = require("../database/notas");
const { Practicas, PracticaIV } = require("../models/notas");

const getAllRecords = (model) => async (req, res) => {
  try {
    const allRecords = await PracticasService.getAll(model);
    res.status(200).send({ status: "OK", data: allRecords });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneRecord = (model) => async (req, res) => {
  const { params: { Codigo } } = req;
  try {
    const record = await PracticasService.getOne(model, Codigo);
    res.send({ status: "OK", data: record });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewRecord = (model) => async (req, res) => {
  const { body } = req;
  try {
    const createdRecord = await PracticasService.createNew(model, body);
    res.status(201).send({ status: "OK", data: createdRecord });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneRecord = (model) => async (req, res) => {
  const { body, params: { Codigo } } = req;
  if (!Codigo) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':Codigo' can not be empty" },
    });
  }
  try {
    const updatedRecord = await PracticasService.updateOne(model, Codigo, body);
    res.send({ status: "OK", data: updatedRecord });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteRecord = (model) => async (req, res) => {
  const { params: { Codigo } } = req;
  try {
    const deletedRecord = await PracticasService.deleteOne(model, Codigo);
    res.status(204).send({ status: "OK", data: deletedRecord });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllPracticas: getAllRecords(Practicas),
  getOnePractica: getOneRecord(Practicas),
  createNewPractica: createNewRecord(Practicas),
  updatePractica: updateOneRecord(Practicas),
  deletePractica: deleteRecord(Practicas),
  getAllPracticaIV: getAllRecords(PracticaIV),
  getOnePracticaIV: getOneRecord(PracticaIV),
  createNewPracticaIV: createNewRecord(PracticaIV),
  updatePracticaIV: updateOneRecord(PracticaIV),
  deletePracticaIV: deleteRecord(PracticaIV),
};
