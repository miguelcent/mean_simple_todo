// define model =================
// grab the mongose module
var mongoose = require('mongoose');
    var Todo = mongoose.model('Todo', {
        text : String
    });