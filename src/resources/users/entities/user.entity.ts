import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  zipCode: string;

  @Column()
  lat: string;

  @Column()
  long: string;

  @Column()
  role: string;

  @Column()
  isActive: boolean;
}
