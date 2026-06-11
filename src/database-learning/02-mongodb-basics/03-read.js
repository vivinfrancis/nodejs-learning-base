const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

async function createUser() {

  try {

    await client.connect();

    const db = client.db('learning_db');

    const users = db.collection('users');

    const result = await users.find().toArray();

    console.log("result for find():", result);

    const result2 = await users.findOne({ name: 'Vivin' });

    console.log("result for findOne():", result2);

    const result3 = await users.find({ name: 'Vivin' }).toArray();

    console.log("result for find() with filter:", result3);

    const result4 = await users.find({ age: { $gt: 25 } }).toArray();

    console.log("result for find() with age filter:", result4);

    const result5 = await users.find().sort({ age: -1 }).toArray();

    console.log("result for find() with sort:", result5);

    const result6 = await users.find().limit(2).toArray();

    console.log("result for find() with limit:", result6);

  } catch (error) {

    console.log(error);

  } finally {

    await client.close();

  }

}

createUser();