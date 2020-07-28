import { Schema } from 'mongoose';

export const userSchema = new Schema({
  name: {type: String, required: true},
  firstSurname: {type: String, required: true},
  secondSurname: String
});

