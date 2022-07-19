export class CreateStaffDTO {
  readonly id: number;
  readonly name: string;
  readonly rut: string;
  readonly phone: number;
  readonly address: string;
  readonly birth_date: Date;
  readonly gender: string;
  readonly email: string;
  readonly labors:  any[];
  readonly createdAt:  Date;
}