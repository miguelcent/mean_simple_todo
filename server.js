// server.js
// set up ===========================================

	var express = require('express');
	var mongoose = require('mongoose');
	var morgan = require('morgan');
	var bodyParser = require('body-parser');
	var methodOverride = require('method-override');
	var app = express();
	var db = require('./config/db');

// configuration ====================================

	//connect to mongodb in modulus.io
	mongoose.connect(db.url);
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

//	routes ===================================================================
require('./app/routes')(app); //configure our routes

// listener (start app with node.js server)==========

	app.listen(8080);
	console.log("App listening on port 8080");