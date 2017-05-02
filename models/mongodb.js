var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://admin:developersmean1!@news-shard-00-00-1ma7s.mongodb.net:27017,news-shard-00-01-1ma7s.mongodb.net:27017,news-shard-00-02-1ma7s.mongodb.net:27017/news_db?ssl=true&replicaSet=news-shard-0&authSource=admin';

module.exports.MongoClient = MongoClient;
module.exports.assert = assert;
module.exports.url = url;