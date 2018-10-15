var express = require('express');
var bodyParser = require('body-parser');

// {varName} is es6 'destructuring' to create variable from the exports of that file.
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// setup middleware
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // create the todo
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        // once saved, send the document back to the user
        res.send(doc);
    }, (err) => {
        // set a bad status
        res.status(400).send(err);
    })
    console.log(req.body);
})

app.listen(3000, () => {
    console.log('Started on port 3000');
});
