exports.getIndex = function (db) {
  return db.collection('tweets').find()
  .sort({ created_at: -1 })
  .limit(30)
  .toArray().then(function (tweets) {
    return {
      tweets: tweets
    };
  });
};

exports.post = function(db, params) {
	if(!params.content) throw 422;

	return db.collection('tweets').insert({
		content: params.content.slice(0, 140),
		created_at: new Date()
	});
};