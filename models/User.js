const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
                isAlphanumeric: true
            }
        }
    },
    {
        hooks: {
            beforeCreate: async(userPassword) => {
                userPassword.password = await bcrypt.hashSync(userPassword.password, 8);
                return userPassword;
            },
            beforeUpdate: async(userPassword) => {
                userPassword.password = await bcrypt.hashSync(userPassword.password, 8);
                return userPassword;
            },
            beforeBulkCreate: async(userPassword) => {
                userPassword.array.forEach(async element => {
                    element.password = await bcrypt.hashSync(element.password, 8);
                });
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);