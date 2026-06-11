const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

async function createUser() {

  try {

    await client.connect();

    const db = client.db('learning_db');

    const users = db.collection('users');

    const result = await users.insertOne({
      name: 'Vivin',
      age: 28,
      city: 'Tuticorin'
    });

    console.log('User Created');

    console.log(result);

  } catch (error) {

    console.log(error);

  } finally {

    await client.close();

  }

}

createUser();