const GrupoService = require("../service/Grupo");

const getAllGrupos = async (req, res) => {
  try {
    const allGrupos = await GrupoService.getAllGrupos();
    res.status(200).send({ status: "OK", data: allGrupos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneGrupo = async (req, res) => {
  const {
    params: { Codigo },
  } = req;
  try {
    const grupo = await GrupoService.getOneGrupo(Codigo);
    res.send({ status: "OK", data: grupo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewGrupo = async (req, res) => {
  const { body } = req;
  if (!body.Codigo ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error: "The following keys are missing or empty in the request body: 'nombre', 'codigo'",
      },
    });
    return;
  }
  const newGrupo = {
    Codigo: body.Codigo,
    Asignatura: body.Asignatura,
    ID_docente:body.ID_docente,
  };
  try {
    const createdGrupo = await GrupoService.createNewGrupo(newGrupo);
    res.status(201).send({ status: "OK", data: createdGrupo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneGrupo = async (req, res) => {
  const {
    body,
    params: { Codigo },
  } = req;
  if (!Codigo) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':Codigo' can not be empty" },
    });
  }
  try {
    const updatedGrupo = await GrupoService.updateOneGrupo(Codigo, body);
    res.send({ status: "OK", data: updatedGrupo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteGrupo = async (req, res) => {
  const {
    params: { Codigo },
  } = req;
  try {
    const deletedGrupo = await GrupoService.deleteGrupo(Codigo);
    res.status(204).send({ status: "OK", data: deletedGrupo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllGrupos,
  getOneGrupo,
  createNewGrupo,
  updateOneGrupo,
  deleteGrupo,
};
