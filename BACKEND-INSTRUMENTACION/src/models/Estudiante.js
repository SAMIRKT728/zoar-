const { sequelize } = require("../database/sequelize.config");
const { DataTypes } = require("sequelize");
const { Grupos } = require("./Grupo");

const Estudiantes = sequelize.define(
  "Estudiante",
  {
    Cedula: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    CodigoGrupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Grupos,
        key: 'Codigo',
      },
    },

  },
  {
    // Other model options go here
  }
);

(async () => {
  await sequelize.sync();
})();

module.exports = { Estudiantes };
