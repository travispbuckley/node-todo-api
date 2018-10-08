// used to connect to the database
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// object destructuring: pull out properties from an object, creating variables
// var user = {name: 'Travis', age: 25};
// 'name' is the name of the new variable and the property we want to pull out.
// var {name} = user;

// first argument is url where DB lives. Amazon, heroku, localhost, etc. 
// Second argument is callback. Fired after conenction either succeeds or fails
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        // .ops attribute has data of everything isnerted
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // db.collection('Users').insertOne({
    //     name: 'Travis',
    //     age: 26,
    //     location: 'Lisle'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});