const express = require("express");
const LugarController = require("../../controllers/Lugares.js");
const checkAuth = require("../../middleware/checkAuth");
const storage = require ('../multer.js')
const multer = require('multer')
const uploader = multer({storage})

const router = express.Router();

/**
 * @openapi
 * /api/v1/docentes:
 *   get:
 *     tags:
 *       - Docentes
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Docente"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.get("/", checkAuth.checkAuth, LugarController.getAllLugaresDePractica);

/**
 * @openapi
 * /api/v1/docentes/:Cedula:
 *   get:
 *     tags:
 *       - Docentes
 *     parameters:
 *       - in: path
 *         name: Cedula
 *         schema:
 *           type: integer
 *         description: The Cedula (ID) of the docente you want to get.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   $ref: "#/components/schemas/Docente"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.get("/:NIT", checkAuth.checkAuth, LugarController.getOneLugarDePractica);

router.post("/", checkAuth.checkAuth, uploader.single('file'), LugarController.createNewLugarDePractica);

router.patch(
  "/:NIT",
  checkAuth.checkAuth,
  LugarController.updateOneLugarDePractica
);

router.delete("/:NIT", checkAuth.checkAuth, LugarController.deleteLugarDePractica);

module.exports = router;
