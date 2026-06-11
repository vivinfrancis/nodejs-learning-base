const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function connectDB() {
    await client.connect();
    console.log("Mongo DB connected");
    const db = client.db('learning_db');
    console.log("Database selected:", db.databaseName);
}

connectDB();