import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class CreateStaffDTO {
  id: number;

  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  rut: string;

  @IsNotEmpty()
  @IsNumber()
  phone: number;

  @IsNotEmpty()
  birth_date: Date;

  @IsNotEmpty()
  gender: string;

  @IsEmail()
  email: string;

  labors: any[];

  createdAt: Date;
}