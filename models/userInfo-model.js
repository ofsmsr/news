var mongodb = require('./mongodb');

module.exports.userInfo = function(req, res) {

    if (req.method === 'GET') {
        mongodb.MongoClient.connect(mongodb.url, function(err, db) {
            mongodb.assert.equal(null, err);
            var obj = {};
            getUsers(db, obj, res, function(res) {
               db.close();
               res.send({});
            });
        });
    }

    if (req.method == 'POST') {
        var jsonString = '';

        req.on('data', function (data) {
            jsonString += data;
        });

        req.on('end', function () {
            obj = JSON.parse(jsonString);
            mongodb.MongoClient.connect(mongodb.url, function(err, db) {
                mongodb.assert.equal(null, err);
                saveUser(db, obj, res, function(res) {
                    db.close();
                   res.send({});
                });
            });
        });
    }
};

var saveUser = function(db, obj, res, callback) {
   var cursor =db.collection('userInfo_col').insertOne(obj);
   cursor.each(function(err, doc) {
      mongodb.assert.equal(err, null);
      if (doc != null) {
         res.send(doc);
      } else {
         callback(res);
      }
   });
};

var getUsers = function(db, obj, res, callback) {
   var cursor =db.collection('userinfo_col').find( );
   cursor.toArray(function(err, doc) {
      mongodb.assert.equal(err, null);
      if (doc != null) {
          res.send(doc);
      } else {
         callback(res);
      }
   });
};
