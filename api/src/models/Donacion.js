const { DataTypes } = require("sequelize");
const { createDeflate } = require("zlib");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "donacion",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      refugio: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userID: {
        type: DataTypes.TEXT,
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
