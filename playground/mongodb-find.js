// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').find().count().then (
        (count) => {
            console.log(`Todos count: ${count}`);
            // console.log(JSON.stringify (docs, undefined, 4));
        }, (err) => {
            console.log('Error finding todo list', err);
        }
    );

    db.close ();
});
