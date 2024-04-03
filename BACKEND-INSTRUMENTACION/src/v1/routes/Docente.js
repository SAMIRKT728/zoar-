const express = require("express");
const docenteController = require("../../controllers/Docente.js");
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
router.get("/", checkAuth.checkAuth, docenteController.getAllDocentes);

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
router.get("/:Cedula", checkAuth.checkAuth, docenteController.getOneDocente);

router.post("/", checkAuth.checkAuth, uploader.single('file'), docenteController.createNewDocente);

router.patch(
  "/:Cedula",
  checkAuth.checkAuth,
  docenteController.updateOneDocente
);

router.delete("/:Cedula", checkAuth.checkAuth, docenteController.deleteDocente);

module.exports = router;
