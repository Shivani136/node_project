const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'ecommerce'; // db name
const client = new MongoClient(url);

async function dbConnect() {
 
    let result = await client.connect();
    db =  result.db(database);
    return db.collection('product-list') // db table name
    
}
module.exports  = dbConnect;