var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var carController = require('./controllers/cars');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.send('Hello API');
});

app.get('/cars', carController.all);

app.get('/cars/:id', carController.findById);

app.post('/cars', carController.create);

app.put('/cars/:id', carController.update);

app.delete('/cars/:id', carController.delete);

db.connect('mongodb://localhost:27017/myapi', function(err) {
	if (err) {
		return console.log(err);
	}
	app.listen(3012, function() {
		console.log('API app started');
	});
});