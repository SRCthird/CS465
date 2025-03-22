import express from 'express';

//import indexRouter from './routes/index.js';
import travelRouter from './routes/travel.js';
//import roomRouter from './routes/rooms.js';
//import usersRouter from './routes/users.js';
//import newsRouter from './routes/news.js';
//import mealsRouter from './routes/meals.js';
//import contactRouter from './routes/contact.js';
//import aboutRouter from './routes/about.js';

const api = express.Router();

//api.use('/', indexRouter);
api.use('/travel', travelRouter);
//api.use('/rooms', roomRouter);
//api.use('/users', usersRouter);
//api.use('/news', newsRouter);
//api.use('/meals', mealsRouter);
//api.use('/contact', contactRouter);
//api.use('/about', aboutRouter);

export default api;

