var mongoose = require('mongoose'),
	db = mongoose.connection,
	Schema = mongoose.Schema,
	collections = {};

var loginSchema = new Schema({
    username: String,
	password: String
}, {
    collection: "login_col"
});


mongoose.connect('mongodb://admin:developersmean1!@news-shard-00-00-1ma7s.mongodb.net:27017,news-shard-00-01-1ma7s.mongodb.net:27017,news-shard-00-02-1ma7s.mongodb.net:27017/news_db?ssl=true&replicaSet=news-shard-0&authSource=admin');

db.on('error', function(err){
	console.log('connection error', err);
});
db.once('open', function(){
	console.log('Connected');
	collections = {
		loginCol: db.collection("login_col")
	}
});
// db.open(function(err, db) {
// 	collections = {
// 		loginCol: db.collection("login_col")
// 	}
// });


module.exports = {
	conncetion: db,
	schema: {
		loginSchema: mongoose.model("loginSchema", loginSchema)
	},
	collections: collections
};