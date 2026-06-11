const sequalize = require('../config/database');
const { DataTypes } = require('sequelize');

const post  = sequalize.define('post',{
    title: DataTypes.STRING,
    content: DataTypes.TEXT
});

module.exports = post;