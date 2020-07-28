import { Document } from 'mongoose';
import { Address } from '../interfaces/address.interface';
import { Insurance } from '../interfaces/insurance.interface';

export interface User extends Document{
  nhc?: string; 
  insuranceList?: Insurance[];

  membershipNumber?: string;
  professionalType?: string;
  
  name: string;
  firstSurname: string; 
  secondSurname: string;
  gender?: string;
  birthDate?: string;
  idDocument?: string;
  address?: Address;
};