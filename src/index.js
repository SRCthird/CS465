import express from 'express';

import indexRouter from './routes/index.js';
import travelRouter from './routes/travel.js';
import roomRouter from './routes/rooms.js';
import usersRouter from './routes/users.js';
import newsRouter from './routes/news.js';
import mealsRouter from './routes/meals.js';
import contactRouter from './routes/contact.js';
import aboutRouter from './routes/about.js';

const app = express.Router();

app.use('/', indexRouter);
app.use('/travel', travelRouter);
app.use('/rooms', roomRouter);
app.use('/users', usersRouter);
app.use('/news', newsRouter);
app.use('/meals', mealsRouter);
app.use('/contact', contactRouter);
app.use('/about', aboutRouter);

export default app;
