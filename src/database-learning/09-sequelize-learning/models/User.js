const sequalize = require('../config/database');
const { DataTypes } = require('sequelize');

const user = sequalize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    }
});

module.exports = user;
