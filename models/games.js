const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GameData extends Model {}

GameData.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		publisher: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		platforms: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		categories: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		genres: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		game_type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.Decimal,
			allowNull: false,
		},
		game_image: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	},
	{
		sequelize,
		freezeTableName: true,
		timeStamps:false,
		underscored: true,
		modelName: 'gameData',
	}
);

module.exports = Comment;
