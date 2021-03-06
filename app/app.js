var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');
var io= require('socket.io')();
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/BookStore');

app.set('port', process.env.PORT || 3000);
app.set('appData',dataFile);
app.set('view engine','ejs');
app.set('views','app/views');

app.locals.siteTitle = 'BookStore';
app.locals.allBookStore = dataFile.BookStore;

app.use(express.static('app/public'));
app.use(require('./routers/index'));
app.use(require('./routers/BookStore'));
app.use(require('./routers/feedback'));
app.use(require('./routers/api'));
app.use(require('./routers/chat'));



var Server = app.listen(app.get('port'), function(){
	console.log('listen to port ' +app.get('port'));
});

io.attach(Server);
io.on('connection', function(socket) {
  socket.on('postMessage', function(data) {
    io.emit('updateMessages', data);
  });
});

reload(Server, app);



// var http = require('http');
// var myServer = http.createServer(function(req, res){
// 	res.writeHead(200,{"Content-Type":"text/plain"});
// 	res.write('<h1>connection meetups</h1>');
// 	res.end();
// });
// myServer.listen(3000);
// console.log('go to port walo');