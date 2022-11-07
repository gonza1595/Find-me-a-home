const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pet", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      size: {
        type: DataTypes.ENUM("pequeño", "mediano", "grande"),
        allowNull: false
      },
      race: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sex: {
        type: DataTypes.ENUM("masculino", "femenino"),
        allowNull: false
      },
      species: {
        type: DataTypes.ENUM("perro", "gato"),
        allowNull: false
      }
  });
};