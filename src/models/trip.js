import { Schema, model } from 'mongoose';

// Define trip schema
const trip = model(
  'trip',
  Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    length: { type: String, required: true } ,
    start: { type: Date, required: true } ,
    resort: { type: String, required: true } ,
    perPerson: { type: Number, required: true } ,
    image: { type: String, required: true } ,
    description: { type: String, required: true }
  })
);

export default trip;
