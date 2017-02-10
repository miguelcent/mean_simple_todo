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

// import app routes
	require('./app/routes')(app);

// listener (start app with node.js server)==========
	app.listen(8080);
	console.log("App listening on port 8080");