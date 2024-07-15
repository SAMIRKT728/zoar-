const { sequelize } = require("../database/sequelize.config");
const { DataTypes } = require("sequelize");
const {Estudiantes} = require ("./Estudiante")


const User = sequelize.define(
  "User",
  {
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Estudiante:{
      type: DataTypes.STRING,
      allowNull: false,
      references:{
          model: Estudiantes,
          key: 'Cedula'
      }
  }
  },
  {
    // Other model options go here
  }
);

(async () => {
  await sequelize.sync();
})();

module.exports = { User };
