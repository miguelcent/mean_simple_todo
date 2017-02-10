// server.js
// set up ===========================================

	var express = require('express');
	var mongoose = require('mongoose');
	var morgan = require('morgan');
	var bodyParser = require('body-parser');
	var methodOverride = require('method-override');
	var app = express();

// configuration ====================================
    var db =  require('./config/database.js')
    mongoose.connect(db.url);
    //old database configuration moved to /config/database.js
    	//connect to mongodb in localhost
    	//mongoose.connect('mongodb://localhost:27017/todos');
        //connect to mongodb in modulus.io (page closed????)
    	//mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');

	// set the static files location /public/img will be /img for users
	app.use(express.static(__dirname + '/public')); 
	// log every request in the console
	app.use(morgan('dev'));
	//parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({'extended':'true'}));
	// parse application/json
	app.use(bodyParser.json());      
	// parse application/vnd.api+json as json                               
	app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
	app.use(methodOverride());

//OLD MODEL
    //old model configuration moved to /app/models/todo.js
	// define model =================
    //var Todo = mongoose.model('Todo', {
    //    text : String
    //});

//NEW ROUTES
require('./app/routes')(app);
//OLD ROUTES
/* Old routes code, moved to /app/routes.js
    // routes ======================================================================

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function(req, res) {

        // use mongoose to get all todos in the database
        Todo.find(function(err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(todos); // return all todos in JSON format
        });
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text : req.body.text,
            done : false
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });

*/
//MOVED TO /app/routes.js
    // application -------------------------------------------------------------
    //    app.get('*', function(req, res) {
    //        res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    //    });

// listener (start app with node.js server)==========

	app.listen(8080);
	console.log("App listening on port 8080");