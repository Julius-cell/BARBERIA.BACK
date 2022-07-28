import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateAppointmentDTO {
  id: number;

  @IsNotEmpty() 
  client_id: number;

  @IsNotEmpty() 
  staff_id: number;

  @IsNotEmpty()
  @IsNumber()
  service_id: number;

  @IsNotEmpty() 
  createdAt:	string;
}