const {sequelize} = require("../database/sequelize.config");
const {DataTypes}= require("sequelize")
const {Docentes} = require("./Docente")
const {Estudiantes} = require ("./Estudiante")
const {LugaresDePractica} = require ("./Lugares")

const Practicas = sequelize.define(
    "Practicas",
    {
        Codigo:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement: true,
        },
        NiveldePractica:{
          type: DataTypes.STRING, allowNull: false,
        },
        Evaluador:{
            type: DataTypes.STRING,
            allowNull: false,
            references:{
                model: Docentes,
                key: 'Cedula'
            }
        },
        Estudiante:{
            type: DataTypes.STRING,
            allowNull: false,
            references:{
                model: Estudiantes,
                key: 'Cedula'
            }
        },
        InstitucionPractica:{
            type: DataTypes.STRING,
            allowNull: false,
            references:{
                model: LugaresDePractica,
                key: 'NIT',
            },
        },
        PeriodoPractica:{
            type: DataTypes.STRING, allowNull: false,
        },
        FechaEvaluacion:{
            type: DataTypes.DATE, allowNull: false,
        },
        ComponenteA:{
            type: DataTypes.INTEGER, allowNull: false,
        },
        ComponenteB:{
            type: DataTypes.INTEGER, allowNull: false,
        },
        ComponenteC:{
            type: DataTypes.INTEGER, allowNull: false,
        },
        Calificacion:{
            type: DataTypes.INTEGER, allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          },
          updatedAt: {
            type: DataTypes.DATE, allowNull: true,
          }

    },
    {
        tableName: "Practicas",
      }
);


const PracticaIV = sequelize.define(
  "PracticaIV",
  {
    Codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Evaluador:{
        type: DataTypes.STRING,
        allowNull: false,
        references:{
            model: Docentes,
            key: 'Cedula'
        }
    },
    Estudiante:{
        type: DataTypes.STRING,
        allowNull: false,
        references:{
            model: Estudiantes,
            key: 'Cedula'
        }
    },
    InstitucionPractica:{
        type: DataTypes.STRING,
        allowNull: false,
        references:{
            model: LugaresDePractica,
            key: 'NIT',
        },
    },
    PeriodoPractica: {
      type: DataTypes.STRING,allowNull: false,
    },
    FechaEvaluacion: {
      type: DataTypes.DATE, allowNull: false,
    },
    ComponenteA: {
      type: DataTypes.INTEGER,allowNull: false,
    },
    ComponenteB: {
      type: DataTypes.INTEGER, allowNull: false,
    },
    ComponenteC: {
      type: DataTypes.INTEGER, allowNull: false,
    },
    ComponenteD: {
      type: DataTypes.INTEGER, allowNull: false,
    },
    Calificacion: {
      type: DataTypes.INTEGER, allowNull: false,
    }
  },
  {
    tableName: "PracticaIV",
  }
);

(async () => {
    await sequelize.sync();
  })();
  
  module.exports = { Practicas,PracticaIV };