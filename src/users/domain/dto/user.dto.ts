import { Insurance } from "../interfaces/insurance.interface";
import { Address } from "../interfaces/address.interface";

export class CreateUserDTO{
  readonly nhc?: string; 
  readonly insuranceList?: Insurance[];

  readonly membershipNumber?: string;
  readonly professionalType?: string;

  readonly name: string;
  readonly firstSurname: string; 
  readonly secondSurname: string;
  readonly gender?: string;
  readonly birthDate?: string;
  readonly idDocument?: string;
  readonly address?: Address;
}