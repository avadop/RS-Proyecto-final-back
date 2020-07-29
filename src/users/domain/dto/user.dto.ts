import { Insurance } from "../interfaces/insurance.interface";
import { Address } from "../interfaces/address.interface";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUserDTO{
  @ApiPropertyOptional()
  nhc?: string; 
  @ApiPropertyOptional({ type: 'Insurance' })
  insuranceList?: Insurance[];

  @ApiPropertyOptional()
  membershipNumber?: string;
  @ApiPropertyOptional()
  professionalType?: string;

  @ApiProperty()
  name: string;
  @ApiProperty()
  firstSurname: string; 
  @ApiProperty()
  secondSurname: string;
  @ApiPropertyOptional()
  gender?: string;
  @ApiPropertyOptional()
  birthDate?: string;
  @ApiPropertyOptional()
  idDocument?: string;
  @ApiPropertyOptional({ type: 'Address' })
  address?: Address;
}