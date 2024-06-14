const express = require("express");
const router = express.Router();
const PracticasController = require("../../controllers/notas");
const checkAuth = require("../../middleware/checkAuth");


router.get("/practicas", checkAuth.checkAuth, PracticasController.getAllPracticas);
router.get("/practicas/:Codigo", checkAuth.checkAuth, PracticasController.getOnePractica);
router.post("/practicas", checkAuth.checkAuth, PracticasController.createNewPractica);
router.put("/practicas/:Codigo", checkAuth.checkAuth, PracticasController.updatePractica);
router.delete("/practicas/:Codigo", checkAuth.checkAuth,PracticasController.deletePractica);



module.exports = router;
