import { Labor } from "src/labors/entities/labors.entity";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('staffs')
export class Staff {
  @ObjectIdColumn() id: ObjectID;
  
  @Column({
    nullable: false
  })
   name: string;

  @Column({
    unique: true,
    nullable: false
  }) 
  rut: string;

  @Column({
    nullable: false
  }) 
  phone: number;

  @Column() 
  address: string;

  @Column({
    nullable: false
  }) 
  birth_date: Date;

  @Column({
    nullable: false
  }) 
  gender: string;

  @Column({
    unique: true,
    nullable: false
  }) 
  email: string;

  @Column((type) => Labor) 
  labors: Labor[];

  @Column() 
  createdAt: Date;

  constructor(staff?: Partial<Staff>) {
    Object.assign(this, staff);
  }
}