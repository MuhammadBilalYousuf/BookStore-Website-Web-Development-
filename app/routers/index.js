var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	var data = req.app.get('appData');
	var pageBookStore = data.BookStore;
	
	res.render('index',{
		pageTitle:'Home',
		BookStore: pageBookStore,
		pageID:'home'
	});
});
module.exports = router;