const { sequelize } = require("../database/sequelize.config");
const { DataTypes } = require("sequelize");

const LugaresDePractica = sequelize.define(
  "LugaresDePractica",
  {
    NIT: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Pais: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    Ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CodigoPostal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CorreoElectronico: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TipoDeInstitucion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    tableName: "LugaresDePractica",
  }
);

(async () => {
  await sequelize.sync();
})();

module.exports = { LugaresDePractica };
