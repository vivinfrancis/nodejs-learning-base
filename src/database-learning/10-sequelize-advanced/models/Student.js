const sequalize = require('../config/database');
const { DataTypes } = require('sequelize');

const student = sequalize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    age: {
        type: DataTypes.STRING,
        validate:{
            min: 18,
            max: 100
        }
    }
});

module.exports = student;
