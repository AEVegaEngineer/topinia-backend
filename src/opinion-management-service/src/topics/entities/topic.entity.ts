import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn('uuid')
  topic_id: string;

  @Column('text')
  user_id: string;

  @Column('text', { unique: true })
  topic_title: string;

  topic_content: string;

  topic_auto_generated: boolean;

  topic_due_date: Date;

  topic_likes: Date;

  topic_dislikes: Date;
}
