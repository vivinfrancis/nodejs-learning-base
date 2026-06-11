const sequalize = require('../config/database');
const { DataTypes } = require('sequelize');

const user = sequalize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    age: {
        type: DataTypes.INTEGER,
    },
    city: {
        type: DataTypes.STRING
    }
},
    {
        hooks: {
            beforeCreate: (user) => {
                user.name = user.name.toUpperCase();
            }
        }
    });

module.exports = user;
