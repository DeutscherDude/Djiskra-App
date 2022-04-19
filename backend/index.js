var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const port = process.env.PORT || 5000;
var app = express();

app.listen(port, () => { console.log(`Server is running on port: ${port}`) });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/pokemons', function(req, res) {
    var list = ['pikachu', 'charmander', 'bulbasaur'];
    res.json(list);
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
