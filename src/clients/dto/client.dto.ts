import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateClientDTO {
  id: number;

  @IsNotEmpty() 
  name: string;

  @IsNotEmpty() 
  email: string;

  @IsNotEmpty()
  @IsNumber()
  phone: number;

  @IsNotEmpty() 
  gender: string;

}