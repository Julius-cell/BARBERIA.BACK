import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateLaborDTO {
  id: number;

  @IsNotEmpty() 
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  duration: number;
}