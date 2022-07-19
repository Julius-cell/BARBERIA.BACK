import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('labors')
export class Labor {
  @ObjectIdColumn() id: ObjectID;

  @Column({
    unique: true,
    nullable: false
  })
   name: string;

  @Column({
    nullable: false
  }) 
  price: number;

  @Column({
    nullable: false
  }) 
  duration: number;

  constructor(labor?: Partial<Labor>) {
    Object.assign(this, labor);
  }
}