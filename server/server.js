var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// create model for a collection. Pass in model name, and the attributes for that model
var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number    
    }
});

var newTodo = new Todo({
    text: 'Mow the lawn',
    completed: true,
    completedAt: 1234567
});

newTodo.save().then((doc) => {
    console.log('Saved Todo', doc);
}, (e) => {
    console.log('Unable to save Todo.');
});