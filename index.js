import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import handlebars from 'hbs';

import indexRouter from './src/routes/index.js';
import travelRouter from './src/routes/travel.js';
import roomRouter from './src/routes/rooms.js';
import usersRouter from './src/routes/users.js';
import newsRouter from './src/routes/news.js';
import mealsRouter from './src/routes/meals.js';
import contactRouter from './src/routes/contact.js';
import aboutRouter from './src/routes/about.js';

var app = express();

// view engine setup
app.set('views', 'src/views');
handlebars.registerPartials('src/views/partials')
handlebars.registerHelper('eq', function (a, b) {
  return a === b;
});
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/travel', travelRouter);
app.use('/rooms', roomRouter);
app.use('/users', usersRouter);
app.use('/news', newsRouter);
app.use('/meals', mealsRouter);
app.use('/contact', contactRouter);
app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
