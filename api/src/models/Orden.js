const { DataTypes } = require("sequelize");
const { createDeflate } = require("zlib");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Orden",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      productos: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
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
        defaultValue: "aprobada",
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [["abiera", "creada", "procesando", "aprobada", "cancelada"]],
        },
      },
      montoTotal: {
        type: DataTypes.FLOAT,
      },
      fecha: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        validate: {
          notEmpty: true,
          isDate: true,
        },
      },
    },
    { timestamps: false }
  );
};
