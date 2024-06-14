const { sequelize } = require("../database/sequelize.config");
const { DataTypes } = require("sequelize");
const { Grupos } = require("./Grupo");

const Estudiantes = sequelize.define(
  "Estudiante",
  {
    Cedula: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Grupos,
        key: 'Codigo',
      },
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 
    createdAt:{
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue:  sequelize.literal('CURRENT_TIMESTAMP')

    },
    updatedAt:{
      type: DataTypes.DATE,
      allowNull: true,
    }


  },
  {
    // Other model options go here
  }
);

(async () => {
  await sequelize.sync();
})();

module.exports = { Estudiantes };
