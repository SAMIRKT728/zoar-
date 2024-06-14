const LugaresDePracticaService = require("../database/Lugares");

const getAllLugaresDePractica = async (req, res) => {
  try {
    const allLugaresDePractica = await LugaresDePracticaService.getAllLugaresDePractica();
    res.status(200).send({ status: "OK", data: allLugaresDePractica });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneLugarDePractica = async (req, res) => {
  const {
    params: { NIT },
  } = req;
  try {
    const lugarDePractica = await LugaresDePracticaService.getOneLugarDePractica(NIT);
    res.send({ status: "OK", data: lugarDePractica });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewLugarDePractica = async (req, res) => {
  const { body, file} = req;
  if (!body.Nombre || !body.Direccion || !body.Ciudad || !body.Pais ||!body.TipoDeInstitucion ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "The following keys are missing or empty in the request body: 'nombre', 'direccion', 'ciudad', 'pais', 'TipoDeInstitucion'",
      },
    });
    return;
  }
  let imagenUrl;

  // Comprobar si existe el archivo en la solicitud
  if (file) {
    imagenUrl = `http://localhost:3001/LugaresPracticas/${file.filename}`;
  } else {
    imagenUrl = body.imagen; // Tomar la imagen del cuerpo de la solicitud si no se proporcionó un archivo
  }

  const newLugarDePractica = {
    Nombre: body.Nombre,
    Direccion: body.Direccion,
    Ciudad: body.Ciudad,
    Pais: body.Pais,
    TipoDeInstitucion: body.TipoDeInstitucion,
    imagen: imagenUrl

  };
  try {
    const createdLugarDePractica = await LugaresDePracticaService.createNewLugarDePractica(newLugarDePractica);
    res.status(201).send({ status: "OK", data: createdLugarDePractica });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneLugarDePractica = async (req, res) => {
  const {
    body,
    params: { NIT },
  } = req;
  if (!NIT) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':NIT' can not be empty" },
    });
  }
  try {
    const updatedLugarDePractica = await LugaresDePracticaService.updateOneLugarDePractica(Codigo, body);
    res.send({ status: "OK", data: updatedLugarDePractica });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteLugarDePractica = async (req, res) => {
  const {
    params: { NIT },
  } = req;
  try {
    const deletedLugarDePractica = await LugaresDePracticaService.deleteLugarDePractica(NIT);
    res.status(204).send({ status: "OK", data: deletedLugarDePractica });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllLugaresDePractica,
  getOneLugarDePractica,
  createNewLugarDePractica,
  updateOneLugarDePractica,
  deleteLugarDePractica,
};
