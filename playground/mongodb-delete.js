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

    // get document ID for user w/ name Alexa
    var alexa;
    db.collection('Users').find({name: 'Alexa'}).toArray().then((docs) => {
        alexa = docs[0];
        db.collection('Users').findOneAndDelete({_id: alexa._id}).then((result) => {
            console.log(result);
        });
    });

    db.collection('Users').deleteMany({name: 'Travis'}).then((result) => {
        console.log(result);
    });
    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunc'}).then((result) => {
    //     console.log(result);
    // })
    // // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });
    // // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    client.close();
});