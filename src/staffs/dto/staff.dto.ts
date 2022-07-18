export class CreateStaffDTO {
  readonly id: number;
  readonly name: string;
  readonly rut: string;
  readonly phone: number;
  readonly address: string;
  readonly birth_date: string;
  readonly gender: string;
  readonly age: number;
  readonly email_address: string;
  readonly specialities:  string[];
}