const EstudianteService = require("../service/Estudiante");

const getAllEstudiantes = async (req, res) => {
  try {
    const allEstudiantes = await EstudianteService.getAllEstudiantes();
    res.status(200).send({ status: "OK", data: allEstudiantes });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneEstudiante = async (req, res) => {
  const {
    params: { Codigo },
  } = req;
  try {
    const estudiante = await EstudianteService.getOneEstudiante(Codigo);
    res.send({ status: "OK", data: estudiante });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewEstudiante = async (req, res) => {
  const { body } = req;
  if (!body.Cedula ||!body.nombre || !body.apellido || !body.correo || !body.CodigoGrupo) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "The following keys are missing or empty in the request body: 'nombre', 'apellido', 'correo', 'CodigoGrupo'",
      },
    });
    return;
  }
  const newEstudiante = {
    Cedula: body.Cedula,
    nombre: body.nombre,
    apellido: body.apellido,
    correo: body.correo,
    CodigoGrupo: body.CodigoGrupo,
  };
  try {
    const createdEstudiante = await EstudianteService.createNewEstudiante(newEstudiante);
    res.status(201).send({ status: "OK", data: createdEstudiante });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneEstudiante = async (req, res) => {
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
    const updatedEstudiante = await EstudianteService.updateOneEstudiante(Codigo, body);
    res.send({ status: "OK", data: updatedEstudiante });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteEstudiante = async (req, res) => {
  const {
    params: { Codigo },
  } = req;
  try {
    const deletedEstudiante = await EstudianteService.deleteEstudiante(Codigo);
    res.status(204).send({ status: "OK", data: deletedEstudiante });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllEstudiantes,
  getOneEstudiante,
  createNewEstudiante,
  updateOneEstudiante,
  deleteEstudiante,
};
