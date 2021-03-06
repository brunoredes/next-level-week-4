import { Column, CreateDateColumn, Entity, PrimaryColumn, Unique } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  private readonly id: string;

  @Column()
  name: string;

  @Column()
  @Unique('email', ['email'])
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User }