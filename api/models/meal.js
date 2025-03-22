import { Schema, model } from 'mongoose';

const meal = model(
  'meal',
  Schema({
    name: { type: String, required: true, index: true },
    category: { type: String, required: true },
    image: { type: String, required: true } ,
    description: { type: String, required: true },
  })
);

export default meal;
