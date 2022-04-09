var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(req, res) {
    var list = ['pikachu', 'charmander', 'bulbasaur'];
    res.json(list);
    console.log("Sent list of items");
})

app.get('*', (req, res) => {
    res.sendFile( path.resolve(__dirname, 'client', 'build', 'index.html'));
})

app.use('/', indexRouter);
app.use('/users', usersRouter);


