var mongodb = require('./mongodb');

module.exports.login = function(req, res) {

    if (req.method == 'POST') {
        var jsonString = '';

        req.on('data', function (data) {
            jsonString += data;
        });

        req.on('end', function () {
            obj = JSON.parse(jsonString);
            mongodb.MongoClient.connect(mongodb.url, function(err, db) {
                mongodb.assert.equal(null, err);
                findUser(db, obj, res, function(res) {
                    db.close();
                   res.send({});
                });
            });
        });
    }
};

var findUser = function(db, findObj, res, callback) {
   var cursor =db.collection('login_col').find(findObj);
   cursor.each(function(err, doc) {
      mongodb.assert.equal(err, null);
      if (doc != null) {
         res.send(doc);
      } else {
         callback(res);
      }
   });
};
