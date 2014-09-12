exports.get = function(params, db) {
	return db.collection('tweets').findOne({
		_id: db.ObjectId(params.id)
	});
}