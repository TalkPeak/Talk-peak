import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Mission } from '../../missions/entities/mission.entity';
import { Journal } from '../../journals/entities/journal.entity';
import { Talk } from '../../talks/entities/talk.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @OneToOne(() => Mission, (mission) => mission.user)
  @JoinColumn({ name: 'user_id' })
  mission: Mission;

  @OneToMany(() => Journal, (journal) => journal.user)
  journals: Journal[];

  @OneToMany(() => Talk, (talk) => talk.user)
  talks: Talk[];
}
