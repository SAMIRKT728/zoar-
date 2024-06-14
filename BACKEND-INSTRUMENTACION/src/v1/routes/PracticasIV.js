const express = require("express");
const router = express.Router();
const PracticasController = require("../../controllers/notas");
const checkAuth = require("../../middleware/checkAuth");


router.get("/practicaIV", checkAuth.checkAuth, PracticasController.getAllPracticaIV);
router.get("/practicaIV/:Codigo", checkAuth.checkAuth, PracticasController.getOnePracticaIV);
router.post("/practicaIV", checkAuth.checkAuth, PracticasController.createNewPracticaIV);
router.delete("/practicaIV/:Codigo", checkAuth.checkAuth, PracticasController.deletePracticaIV);

module.exports = router;
