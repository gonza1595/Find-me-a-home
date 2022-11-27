const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'Carrito',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			contador: {
				type: DataTypes.INTEGER,
			},
			nombre: {
				type: DataTypes.TEXT,
			},
			imagen: {
				type: DataTypes.TEXT,
			},
			precio: {
				type: DataTypes.FLOAT,
				defaultValue: 0,
			},
			stock: {
				type: DataTypes.INTEGER,
			},
			status: {
				type: DataTypes.ENUM(['Activado', 'Desactivado']),
				defaultValue: 'Activado',
			},
		},
		{timestamps: false}
	);
};
