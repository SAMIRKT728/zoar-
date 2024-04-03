const { sequelize } = require("../database/sequelize.config");
const { DataTypes } = require("sequelize");

const Grupos = sequelize.define(
  "Grupo",
  {
    Codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      allowNull: false,
    },
    Asignatura: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ID_docente: {
        type: DataTypes.STRING,
        allowNull: false,
      },

   
  },
  {
    // Other model options go here
  }
);

(async () => {
  await sequelize.sync();
})();

module.exports = { Grupos };
