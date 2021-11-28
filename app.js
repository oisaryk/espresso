const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./swagger.json');
const appRouter = require('./routes/appRoutes');
const statisticRouter = require('./routes/statisticRoutes');
const fakeUserRouter = require('./routes/fakeuser');
const dbConnection = require('./services/dbconnection.service');

require('dotenv').config();

const app = express();

// Connect to the database
dbConnection.establishDatabaseConnection();

// Swagger middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Logger
app.use(logger('dev'));

// JSON convert
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cookie parser
app.use(cookieParser());

// Static files 
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', appRouter);

app.use('/statistic', statisticRouter);
app.use('/api/fakeuser', fakeUserRouter);
app.use('/api/crypto', appRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
