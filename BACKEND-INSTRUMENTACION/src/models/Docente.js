const { sequelize } = require("../database/sequelize.config");
const { DataTypes } = require("sequelize");
const { Grupos } = require("./Grupo");

const Docentes = sequelize.define(
  "Docente",
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
  }
);

(async () => {
  await sequelize.sync();
})();

module.exports = { Docentes };
