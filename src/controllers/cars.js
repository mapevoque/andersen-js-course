var Cars = require('../models/cars');

exports.all = function(req, res) {
	Cars.all(function(err, docs) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(docs);
	});
};

exports.findById = function(req, res) {
	Cars.findById(req.params.id, function(err, doc) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(doc);
	});
};

exports.create = function(req, res) {
	var car = {
		name: req.body.name
	};
	Cars.create(car, function(err, result) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(car);
	});
};

exports.update = function(req, res) {
	Cars.update(
		req.params.id,
		{name: req.body.name},
		function(err, result) {
			if (err) {
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);
		}
	);
};

exports.delete = function(req, res) {
	Cars.delete(
		req.params.id,
		function(err, result) {
			if (err) {
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);
		}
	);
};