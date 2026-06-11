const sequalize = require('../config/database');
const { DataTypes } = require('sequelize');

const course  = sequalize.define('Course',{
    title: DataTypes.STRING,
    description: DataTypes.TEXT
});

module.exports = course;