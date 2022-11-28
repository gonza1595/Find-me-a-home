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
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      imagen: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      edad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tamaño: {
        type: DataTypes.ENUM("pequeño", "mediano", "grande"),
      },
      raza: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sexo: {
        type: DataTypes.ENUM("masculino", "femenino"),
        allowNull: false
      },
      especie: {
        type: DataTypes.ENUM("perro", "gato"),
        allowNull: false
      },
      estado: {
        type: DataTypes.ENUM("activo", "inactivo"),
        defaultValue: "activo"
      }
  },
  { timestamps: false }
  );
};
