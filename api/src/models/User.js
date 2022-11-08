const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("user", {
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
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    age: {
     type: DataTypes.INTEGER,
     allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    range: {
      type: DataType.ENUM("admin", "usuario", "refugio"),
      defaultValue: "usuario"
    }
  });
};
