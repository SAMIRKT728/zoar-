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
    params: { Cedula },
  } = req;
  try {
    const estudiante = await EstudianteService.getOneEstudiante(Cedula);
    res.send({ status: "OK", data: estudiante });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewEstudiante = async (req, res) => {
  const { body, file } = req;
  const errors = [];

  if (!body.nombre || !body.apellido || !body.correo || !body.CodigoGrupo) {
    errors.push("campo vacio en : nombre o apellido o correo o codigoGrupo");

  }

  if (!body.correo || !body.correo.endsWith("@unicesar.edu.co")) {
    errors.push("Correo no válido. Debe ser un correo de @unicesar.edu.co");
  }

  if (!body.Cedula || isNaN(body.Cedula) || body.Cedula < 10000 || body.Cedula > 99999999999) {
    errors.push("Cédula no válida. Debe estar en un rango entre 10000 y 99999999999");
  }

  if (errors.length > 0) {
    res.status(400).send({
      status: "FAILED",
      data: {
        errors: errors,
      },
    });
    return;
  }

  let imagenUrl;

  if (file) {
    imagenUrl = `http://localhost:3001/Estudiantes/${file.filename}`;
  } else {
    imagenUrl = body.imagen; 
  }
  const newEstudiante = {
    Cedula: body.Cedula,
    nombre: body.nombre,
    apellido: body.apellido,
    correo: body.correo,
    CodigoGrupo: body.CodigoGrupo,
    imagen: imagenUrl

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
    params: { Cedula },
  } = req;
  try {
    const deletedEstudiante = await EstudianteService.deleteEstudiante(Cedula);
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
