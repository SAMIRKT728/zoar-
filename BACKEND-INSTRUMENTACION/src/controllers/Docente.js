const DocenteService = require("../database/Docente");

const getAllDocentes = async (req, res) => {
  try {
    const allDocentes = await DocenteService.getAllDocentes();
    res.status(200).send({ status: "OK", data: allDocentes });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneDocente = async (req, res) => {
  const {
    params: { Cedula },
  } = req;
  try {
    const docente = await DocenteService.getOneDocente(Cedula);
    res.send({ status: "OK", data: docente });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewDocente = async (req, res) => {
  const { body,file } = req;
  if (!body.nombre || !body.apellido || !body.correo || !body.CodigoGrupo  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:    
          "The following keys are missing or empty in the request body: 'nombre', 'apellido', 'correo', 'CodigoGrupo' ",
      },
    });
    return;
  }

  let imagenUrl;

  // Comprobar si existe el archivo en la solicitud
  if (file) {
    imagenUrl = `http://localhost:3001/Docentes/${file.filename}`;
  } else {
    imagenUrl = body.imagen; // Tomar la imagen del cuerpo de la solicitud si no se proporcionó un archivo
  }
  const newDocente = {
    Cedula: body.Cedula,
    nombre: body.nombre,
    apellido: body.apellido,
    correo: body.correo,
    CodigoGrupo: body.CodigoGrupo,
    imagen: imagenUrl
  };
  try {
    const createdDocente = await DocenteService.createNewDocente(newDocente);
    res.status(201).send({ status: "OK", data: createdDocente });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};



const updateOneDocente = async (req, res) => {
  const {
    body,
    params: { Cedula },
  } = req;
  if (!Cedula) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':Cedula' can not be empty" },
    });
  }
  try {
    const updatedDocente = await DocenteService.updateOneDocente(Cedula, body);
    res.send({ status: "OK", data: updatedDocente });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteDocente = async (req, res) => {
  const {
    params: { Cedula },
  } = req;
  try {
    const deletedDocente = await DocenteService.deleteDocente(Cedula);
    res.status(204).send({ status: "OK", data: deletedDocente });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllDocentes,
  getOneDocente,
  createNewDocente,
  updateOneDocente,
  deleteDocente,
};
