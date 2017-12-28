var express = require('express');
var router = express.Router();


router.get('/BookStore', function(req, res){
	var data = req.app.get('appData');
	var pageBookStore = data.BookStore;

	res.render('BookStore',{
		pageTitle: 'BookStore',
		BookStore: pageBookStore,
		pageID: 'BookStore'
	});
	
});

router.get('/BookStore/:BookStoreid', function(req, res){
	var data = req.app.get('appData')
	var pageBookStore = [];
	data.BookStore.forEach(function(item){
		if(item.shortname == req.params.BookStoreid){
			pageBookStore.push(item);
		}
	});
		res.render('BookStore',{
		pageTitle: 'BookStore Info',
		BookStore: pageBookStore,
		pageID: 'BookStoreDetail'
	});

	
});
module.exports = router;