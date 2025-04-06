import { Schema, model } from 'mongoose';

const meal = model(
  'meal',
  Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    category: { type: String, required: true },
    image: { type: String, required: true } ,
    description: { type: String, required: true },
  })
);

export default meal;
