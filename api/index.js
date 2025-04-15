import express from 'express';

import travelRouter from './routes/travel.js';
import roomRouter from './routes/rooms.js';
import newsRouter from './routes/news.js';
import mealsRouter from './routes/meals.js';
import contactsRouter from './routes/contacts.js';

const api = express.Router();

api.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
  next();
})

api.use('/travel', travelRouter);
api.use('/rooms', roomRouter);
api.use('/news', newsRouter);
api.use('/meals', mealsRouter);
api.use('/contacts', contactsRouter);

export default api;
