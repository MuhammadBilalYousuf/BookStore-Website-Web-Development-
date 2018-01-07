var BookStore = require('../models/BookStore');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/BookStore');

var BookStore = [
    new Product({
   imagePath: '/images/BookStore/<%= item.shortname %>.jpg',
    title: 'Book1',
    name: 'Author1'
}),
    new Product({
   imagePath: '/images/BookStore/<%= item.shortname %>.jpg',
    title: 'Book2',
    name: 'Author2'
}),
    new Product({
   imagePath: '/images/BookStore/<%= item.shortname %>.jpg',
    title: 'Book3',
    name: 'Author3'
})
    ];
var done = 0;
for (var i=0; i < BookStore.length; i++){
    BookStore[i].save(function(err, result){
        done++;
        if (done === BookStore.length) {
        exit();    
        }
    });
}

function exit(){
    mongoose.disconnect();
}