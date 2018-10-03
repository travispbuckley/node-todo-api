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

    // no argument to find() fetches all todos. returns a 'cursor' (pointer) that has methods to get our documents
    // db.collection('Todos').find({
    //     _id: new ObjectID('5ba067742c7e3d3f642e20f1')
    // }).toArray().then((docs) => {
    //     console.log('todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('failed to fetch todos');
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`todos: ${count}`);
    // }, (err) => {
    //     console.log('failed to fetch todos');
    // });

    db.collection('Users').find({name: 'Travis'}).toArray().then((docs) => {
        docs.forEach(doc => {
            console.log(doc);
        });
    }, (err) => {
        console.log('failed to fetch todos');
    });


    client.close();
});