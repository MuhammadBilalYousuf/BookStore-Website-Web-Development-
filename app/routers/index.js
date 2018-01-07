var express = require('express');
var router = express.Router();

var BookStore = require('../models/BookStore');


router.get('/', function(req, res){
BookStore.find(function(err, docs){
	var data = req.app.get('appData');
	var pageBookStore = data.BookStore;
	var BookStoreChunks = [];
		var ChunkSize = 3;
		for (var i = 0; i < docs.length; i += ChunkSize) {
			BookStoreChunks.push(docs.slice(i, i + ChunkSize));
		}
	res.render('index',{
		pageTitle:'Home',
		BookStore: pageBookStore,
		pageID:'home',
		BookStore: BookStoreChunks
	});
  });
});
module.exports = router;