export class CreateStaffDTO {
  id: number;
  name: string;
  rut: string;
  phone: number;
  address: string;
  birth_date: Date;
  gender: string;
  email: string;
  labors: any[];
  createdAt: Date;
}