const express = require("express");
const grupoController = require("../../controllers/Grupo");
const checkAuth = require("../../middleware/checkAuth");

const router = express.Router();

/**
 * @openapi
 * /api/v1/grupos:
 *   get:
 *     tags:
 *       - Grupos
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
 *                     $ref: "#/components/schemas/Grupo"
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
router.get("/", checkAuth.checkAuth, grupoController.getAllGrupos);

/**
 * @openapi
 * /api/v1/grupos/:Codigo:
 *   get:
 *     tags:
 *       - Grupos
 *     parameters:
 *       - in: path
 *         name: Codigo
 *         schema:
 *           type: integer
 *         description: The CodigoGrupo (ID) of the grupo you want to get.
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
 *                   $ref: "#/components/schemas/Grupo"
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
router.get("/:Codigo", checkAuth.checkAuth, grupoController.getOneGrupo);

router.post("/", checkAuth.checkAuth, grupoController.createNewGrupo);

router.patch(
  "/:Codigo",
  checkAuth.checkAuth,
  grupoController.updateOneGrupo
);

router.delete("/:Codigo", checkAuth.checkAuth, grupoController.deleteGrupo);

module.exports = router;
