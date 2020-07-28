import { Schema } from 'mongoose';

export const addressSchema = new Schema({
  street: String,
  number: String,
  door: String,
  postalCode: String,
  city: String
})