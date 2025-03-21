import { Schema, model } from 'mongoose';

const room = model(
  'room',
  Schema({
    name: { type: String, required: true, index: true },
    image: { type: String, required: true } ,
    description: { type: String, required: true },
    rate: { type: Number, required: true}
  })
);

export default room;
