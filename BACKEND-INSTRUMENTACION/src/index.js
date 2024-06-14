const express = require("express");
const bodyParser = require("body-parser");
const v1AuthRouter = require("./v1/routes/authRoutes");
const v1DocenteRouter = require("./v1/routes/Docente");
const v1EstudianteRouter = require("./v1/routes/Estudiante"); // Agrega la ruta de Estudiante
const v1GrupoRouter = require("./v1/routes/Grupo");
const v1Lugares = require ("./v1/routes/lugares");
const v1PracticasRouter = require("./v1/routes/Practicas"); // Agrega la ruta de Practicas
const v1PracticaIVRouter = require("./v1/routes/PracticasIV");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Agrega las siguientes líneas para incluir las rutas de docentes, estudiantes y grupos
app.use("/api/v1/docentes", v1DocenteRouter);
app.use("/api/v1/estudiantes", v1EstudianteRouter);
app.use("/api/v1/grupos", v1GrupoRouter);
app.use("/api/v1/auth", v1AuthRouter);
app.use("/api/v1/lugares",v1Lugares)
app.use("/api/v1/practicas", v1PracticasRouter); // Añade la ruta de Practicas
app.use("/api/v1/practicasIV", v1PracticaIVRouter);
app.use(express.static('public'));
//app.use(express.static('../public/Docentes'));



app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
