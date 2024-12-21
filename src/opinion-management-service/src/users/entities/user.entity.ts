import { Optional } from '@nestjs/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column('uuid')
  @Optional()
  user_social_media: string;

  @Column('uuid')
  @Optional()
  user_following_list: string;

  @Column('uuid')
  @Optional()
  user_follower_list: string;

  @Column('text')
  user_fullname: string;

  @Column('text')
  user_email: string;

  @Column('text')
  user_gender: string;

  @Column('text')
  user_date_of_birth: string;

  @Column('text')
  user_country: string;

  @Column('text')
  user_state_province: string;

  @Column('text')
  user_city: string;

  @Column('text')
  user_locality: string;

  @Column('number')
  user_followers_count: number;

  @Column('number')
  user_following_count: number;
}
