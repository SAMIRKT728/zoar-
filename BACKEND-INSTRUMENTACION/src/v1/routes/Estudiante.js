const express = require("express");
const estudianteController = require("../../controllers/Estudiante");
const checkAuth = require("../../middleware/checkAuth");

const router = express.Router();

/**
 * @openapi
 * /api/v1/estudiantes:
 *   get:
 *     tags:
 *       - Estudiantes
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
 *                     $ref: "#/components/schemas/Estudiante"
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
router.get("/", checkAuth.checkAuth, estudianteController.getAllEstudiantes);

/**
 * @openapi
 * /api/v1/estudiantes/:Cedula:
 *   get:
 *     tags:
 *       - Estudiantes
 *     parameters:
 *       - in: path
 *         name: Cedula
 *         schema:
 *           type: integer
 *         description: The Cedula (ID) of the estudiante you want to get.
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
 *                   $ref: "#/components/schemas/Estudiante"
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
router.get("/:Cedula", checkAuth.checkAuth, estudianteController.getOneEstudiante);

router.post("/", checkAuth.checkAuth, estudianteController.createNewEstudiante);

router.patch(
  "/:Cedula",
  checkAuth.checkAuth,
  estudianteController.updateOneEstudiante
);

router.delete("/:Cedula", checkAuth.checkAuth, estudianteController.deleteEstudiante);

module.exports = router;
