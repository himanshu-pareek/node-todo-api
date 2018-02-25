// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne ({
    //     text: 'Something to add in todo list',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert data', err);
    //     }
    //     console.log(JSON.stringify (result.ops, undefined, 4));
    // });

    db.collection ('Users').insertOne ({
        name: 'rajneesh',
        age: 20,
        location: 'Kharagpur'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert data', err);
        }
        console.log(result.ops[0]._id.getTimestamp ());
    });

    db.close ();
});
