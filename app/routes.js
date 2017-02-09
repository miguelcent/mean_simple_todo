// app/routes.js

// import model
var Todo = require('./models/todo');

module.exports = function(app) {
	//api----------------------------------------
	//get all todos
	app.get('/api/todos', function(req, res){
		//use mongoose to get all the todos in db
		Todo.find(function(err, todos){
			if(err)
				res.send(err)
			res.json(todos);
		});
	});
	//create a todo
	app.post('/api/todos', function(req,res){
			//Create a todo, with information coming from AJAX execution in angular side
			Todo.create({
					text : req.body.text,
					done : false
				}, function(err, todo){
						if(err)
							res.send(err)
						// get and return all the todos after you create another
						Todo.find(function(err, todos) {
			                if (err)
			                    res.send(err)
			                res.json(todos);
			            });
					});
				});


	//delete a todo
	app.delete('/api/todos/:todo_id', function(req, res){
		//delete a todo 
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo){
			if(err)
				res.send(err)
			// get and return all the todos after you remove one
			Todo.find(function(req, res){
				if(err)
					res.send(err)
				res.json(todos);
			});
		});
	});
}