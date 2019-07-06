var ObjectID = require('mongodb').ObjectID;
var db = require('../db');

exports.all = function(cb) {
	db.get().collection('cars').find().toArray(function(err, docs) {
		cb(err, docs);
	});
};

exports.findById = function(id, cb) {
	db.get().collection('cars').findOne({_id: ObjectID(id)}, function(err, doc) {
		cb(err, doc);
	});
};

exports.create = function(car, cb) {
	db.get().collection('cars').insert(car, function(err, result) {
		cb(err, result);
	});
};

exports.update = function(id, newData, cb) {
	db.get().collection('cars').updateOne(
		{_id: ObjectID(id)},
		newData,
		function(err, result) {
			cb(err, result);
		}
	);
};

exports.delete = function(id, cb) {
	db.get().collection('cars').deleteOne(
		{_id: ObjectID(id)},
		function(err, result) {
			cb(err, result);
		}
	);
};