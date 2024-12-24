import { ApiProperty } from '@nestjs/swagger';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'socialMedia' })
export class SocialMedia {
  @ApiProperty({
    example: '1022c266-8803-4916-a20c-08bb2a6ebf17',
    description: 'Social Media Registry ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  socialMediaId: string;

  @ApiProperty({
    example: '1022c266-8803-4916-a20c-08bb2a6ebf17',
    description:
      'Foreign Key: User reference ID, the owner of this social media',
  })
  @Column('text')
  socialMediaUserId: string;

  @ApiProperty({
    example: 'facebook',
    description: 'The platform to which the social media account belongs to',
  })
  @Column('text')
  socialMedia_platform: string;

  @ApiProperty({
    example: 'ladiesman217',
    description: 'The social media account',
  })
  @Column('text')
  socialMediaUsername: string;

  @ApiProperty({
    example: 'https://www.facebook.com/profile/ladiesman217',
    description: 'The social media account',
  })
  @Column('text')
  socialMediaUserUrl: string;
}
