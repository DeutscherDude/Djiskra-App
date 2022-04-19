var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usersRouter = require('./routes/userRoutes');

const port = process.env.PORT || 5000;
var app = express();

app.listen(port, () => { console.log(`Server is running on port: ${port}`) });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
