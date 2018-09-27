var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require("nunjucks");

// ROUTES
var home = require('./routes/home');
var houses = require('./routes/houses');
var persons = require('./routes/persons');
var register = require('./routes/register');
var agreements = require('./routes/agreements');
var sales = require('./routes/sales');

var app = express();

nunjucks.configure('template', {
    autoescape: true,
    express   : app
});

// view engine setup
app.set('views', path.join(__dirname, 'template'));
app.set('view engine', 'nunjucks');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
app.use('/', home);
app.use('/houses', houses);
app.use('/persons', persons);
app.use('/register', register);
app.use('/agreements', agreements);
app.use('/sales', sales);
// app.use('/search', search);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.html', res.locals);
});

module.exports = app;