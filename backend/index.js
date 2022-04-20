require('dotenv').config();
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDb  = require('./config/db');
var usersRouter = require('./routes/userRoutes');
var projectsRouter = require('./routes/projectRoutes')
var { errorHandler } = require('./middleware/errorMiddleware');

connectDb()

const port = process.env.PORT || 5000;
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/projects', projectsRouter);

app.use(errorHandler);

app.listen(port, () => { console.log(`Server is running on port: ${port}`) });

module.exports = app;