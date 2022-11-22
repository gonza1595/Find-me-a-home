const {DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'Orden',
		{
			cart: {
				type: DataTypes.ARRAY(DataTypes.JSON),
				allowNull: true,
			},
			userID: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				validate: {
					notEmpty: true,
					isUUID: 4,
				},
			},
			estado: {
				type: DataTypes.ENUM(
					'abiera',
					'creada',
					'procesando',
					'aprobada',
					'cancelada'
				),
				allowNull: false,
				validate: {
					notEmpty: true,
					isIn: [['abiera', 'creada', 'procesando', 'aprobada', 'cancelada']],
				},
			},
		},
		{timestamps: false}
	);
};
