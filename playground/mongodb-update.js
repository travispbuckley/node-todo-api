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

    // findOneAndUpdate
    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5bbab9aaacfd75e1330385b5')}, {
        $set: {
            name: 'Travis'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    client.close();
});