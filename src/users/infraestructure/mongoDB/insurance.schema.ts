import { Schema } from 'mongoose';

export const insuranceSchema = new Schema({
  cardNumber: String,
  name: String,
  insuranceType: String
})