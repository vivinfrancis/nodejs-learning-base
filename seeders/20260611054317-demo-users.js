'use strict';

module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert(
            'Users',
            [
                {
                    name: 'Vivin seeder',
                    email: 'vivinseeder@gmail.com',
                    age: 28,
                    city: 'Tuticorin',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'John seeder',
                    email: 'johnseeder@gmail.com',
                    age: 30,
                    city: 'Chennai',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ]
        );

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete(
            'Users',
            null,
            {}
        );

    }

};