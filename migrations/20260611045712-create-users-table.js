'use strict';

module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable(
            'Users',
            {

                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false
                },

                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },

                email: {
                    type: Sequelize.STRING,
                    unique: true
                },

                age: {
                    type: Sequelize.INTEGER
                },

                city: {
                    type: Sequelize.STRING
                },

                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },

                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                }

            }
        );

    },

    async down(queryInterface) {

        await queryInterface.dropTable(
            'Users'
        );

    }

};