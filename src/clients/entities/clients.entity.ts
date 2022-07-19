import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('client')
export class Client {
  @ObjectIdColumn() id: ObjectID;

  @Column({
    nullable: false
  })
   name: string;

  @Column({
    nullable: false
  }) 
  email: string;

  @Column({
    nullable: false
  }) 
  phone: number;

  @Column({
    nullable: false
  }) 
  gender: string;

  constructor(client?: Partial<Client>) {
    Object.assign(this, client);
  }
}