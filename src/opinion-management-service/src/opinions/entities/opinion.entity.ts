import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Opinion {
  @PrimaryGeneratedColumn('uuid')
  topic_id: string;

  @Column('text')
  topic_option_id: string;

  @Column('text')
  topic_vote_user_id: string;
}
