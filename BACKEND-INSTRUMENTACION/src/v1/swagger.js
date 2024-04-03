const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Basic Meta Informations about our API
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Instumentacion API", version: "1.0.0" },
  },
  apis: [
    "./src/v1/routes/Docente.js",
    "./src/v1/routes/Estudiante.js", // Agrega la ruta de Estudiante
    "./src/v1/routes/Grupo.js",      // Agrega la ruta de Grupo
    "./src/database/Docente.js",
    "./src/database/Estudiante.js",  // Agrega el archivo de definición de Estudiante
    "./src/database/Grupo.js",       // Agrega el archivo de definición de Grupo
  ],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to set up our docs
const swaggerDocs = (app, port) => {
  // Route-Handler to visit our docs
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Make our docs in JSON format available
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
  );
};

module.exports = { swaggerDocs };
