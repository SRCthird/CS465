import { Schema, model } from 'mongoose';

const contact = model(
  'contact',
  Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true }
  })
);

export default contact;
