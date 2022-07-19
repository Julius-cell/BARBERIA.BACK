import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('appointments')
export class Appointment {
  @ObjectIdColumn() id: ObjectID;
  @Column() client_id: number;
  @Column() staff_id: number;
  @Column() service_id: number;
  @Column() createdAt: Date;

  constructor(appointment?: Partial<Appointment>) {
    Object.assign(this, appointment);
  }
}