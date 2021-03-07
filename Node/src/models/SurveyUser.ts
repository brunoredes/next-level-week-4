import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';


@Entity('surveys_users')
class SurveyUser {
  @PrimaryColumn()
  private readonly id: string;

  @Column()
  user_id: string;

  @Column()
  survey_id: string;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { SurveyUser };
