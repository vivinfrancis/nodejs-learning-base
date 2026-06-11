const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

async function createUser() {

  try {

    await client.connect();

    const db = client.db('learning_db');

    const users = db.collection('users');

    const result = await users.updateOne({
      name: 'Vivin'
    }, {
      $set: {
        age: 29,
        city: 'Chennai'
      }
    });

    console.log('User Updated');

    console.log(result);

    const result2 = await users.updateMany({
      age: { $gt: 25 }
    }, {
      $set: {
        city: 'Chennai'
      }
    });

    console.log('Users Updated');

    console.log(result2);

  } catch (error) {

    console.log(error);

  } finally {

    await client.close();

  }

}

createUser();