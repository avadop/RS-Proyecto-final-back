import { Schema } from 'mongoose';
import { addressSchema } from './address.schema';
import { insuranceSchema } from './insurance.schema';

export const userSchema = new Schema({
  nhc: String,
  insuranceList: [insuranceSchema],

  membershipNumber: String,
  professionalType: String,

  name: {type: String, required: true},
  firstSurname: {type: String, required: true},
  secondSurname: String,
  gender: String,
  birthDate: String,
  idDocument: String,
  address: addressSchema

});

