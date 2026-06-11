const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

async function deleteUser() {

    try {

        await client.connect();

        const db = client.db('learning_db');

        const users = db.collection('users');

        const result = await users.aggregate([
            {
                $group: {
                    _id: "$city",
                    totalUsers: { $sum: 1 }
                }
            }
        ]).toArray();

        console.log('Aggregation Result for group by city:');
        console.log(result);

        const result2 = await users.aggregate([
            {
                $group: {
                    _id: null,
                    averageAge: { $avg: "$age" }
                }
            }
        ]).toArray();

        console.log('Aggregation Result for all users:');
        console.log(result2);

        const result3 = await users.aggregate([
            {
                $group: {
                    _id: null,
                    maxAge: { $max: "$age" },
                    minAge: { $min: "$age" }
                }
            }
        ]).toArray();

        console.log('Aggregation Result for max and min age:');
        console.log(result3);

        const result4 = await users.aggregate([
            {
                $match: { age: { $gt: 25 } }
            },
            {
                $group: {
                    _id: "$city",
                    count: { $sum: 1 }
                }
            }
        ]).toArray();

        console.log('Aggregation Result for count of users with age > 25:');
        console.log(result4);

    } catch (error) {

        console.log(error);

    } finally {

        await client.close();

    }

}

deleteUser();