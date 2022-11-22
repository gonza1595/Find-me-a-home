const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'Comentario',
		{
			texto: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					notEmpty: true,
					len: [1, 280],
				},
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
		{timestamps: false}
	);
};
