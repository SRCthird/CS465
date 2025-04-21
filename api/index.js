import express from 'express';

import travelRouter from './routes/travel.js';
import roomRouter from './routes/rooms.js';
import newsRouter from './routes/news.js';
import mealsRouter from './routes/meals.js';
import contactsRouter from './routes/contacts.js';
import loginRouter from './routes/login.js';
import registerRouter from './routes/register.js';

const api = express.Router();

api.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
})

api.use('/travel', travelRouter);
api.use('/rooms', roomRouter);
api.use('/news', newsRouter);
api.use('/meals', mealsRouter);
api.use('/contacts', contactsRouter);
api.use('/login', loginRouter);
api.use('/register', registerRouter);

export default api;
