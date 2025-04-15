import express from 'express';
import cors from 'cors';

import travelRouter from './routes/travel.js';
import roomRouter from './routes/rooms.js';
import newsRouter from './routes/news.js';
import mealsRouter from './routes/meals.js';
import contactsRouter from './routes/contacts.js';

const api = express.Router();

api.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With','Content-Type', 'Accept']
}));

api.use('/travel', travelRouter);
api.use('/rooms', roomRouter);
api.use('/news', newsRouter);
api.use('/meals', mealsRouter);
api.use('/contacts', contactsRouter);

export default api;
