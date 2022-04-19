var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/pokemons', function(req, res) {
    var list = ['pikachu', 'charmander', 'bulbasaur'];
    res.json(list);
    console.log("Sent list of items");
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
