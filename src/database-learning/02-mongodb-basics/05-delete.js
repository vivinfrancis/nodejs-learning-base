const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

async function deleteUser() {

  try {

    await client.connect();

    const db = client.db('learning_db');

    const users = db.collection('users');

    const result = await users.deleteOne({
      name: 'John'
    });

    console.log('User Deleted');
    console.log(result);

  } catch (error) {

    console.log(error);

  } finally {

    await client.close();

  }

}

deleteUser();