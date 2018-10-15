var mongoose = require('mongoose');

// create model for a collection. Pass in model name, and the attributes for that model
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null    
    }
});

// export the user model to be used elsewhere.
module.exports = {Todo};