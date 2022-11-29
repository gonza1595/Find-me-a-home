const { DataTypes } = require("sequelize");
const { createDeflate } = require("zlib");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Donacion",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        validate: {
          notEmpty: true,
          isUUID: 4,
        },
      },
      refugio: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      userID: {
        type: DataTypes.TEXT,
      },
      estado: {
        type: DataTypes.ENUM(
          "abiera",
          "creada",
          "procesando",
          "aprobada",
          "cancelada"
        ),
        defaultValue: "creada",
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [["abiera", "creada", "procesando", "aprobada", "cancelada"]],
        },
      },
      montoTotal: {
        type: DataTypes.FLOAT,
      },
    },
    
  );
};