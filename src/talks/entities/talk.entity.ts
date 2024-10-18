import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Talk {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  answer1: string;

  @Column()
  answer2: string;

  @Column()
  answer3: string;

  @ManyToOne(() => User, (user) => user.talks)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
