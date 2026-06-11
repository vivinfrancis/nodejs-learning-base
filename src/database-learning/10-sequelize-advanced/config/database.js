const { Sequelize } = require('sequelize');

const sequalize = new Sequelize(
    'sequalize_learning',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequalize;