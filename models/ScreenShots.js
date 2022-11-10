const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class ScreenShots extends Model {}

ScreenShots.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        img_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'gamedata',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timeStamps: false,
        underscored: true,
        modelName: 'screenshots'
    }
);

module.exports = ScreenShots;