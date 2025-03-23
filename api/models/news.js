import { Schema, model } from 'mongoose';

const news = model(
  'news',
  Schema({
    code: { type: String, required: true, index: true },
    title: { type: String, required: true, index: true },
    classification: { type: String, required: true },
    image: { type: String, required: true } ,
    date: { type: Date, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true }
  })
);

export default news;
