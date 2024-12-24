import { ApiProperty } from '@nestjs/swagger';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SocialMedia } from '../../social_media/entities/social-media.entity';

@Entity({ name: 'users' })
export class User {
  @ApiProperty({
    example: '1022c266-8803-4916-a20c-08bb2a6ebf17',
    description: 'User ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @ApiProperty({
    example: 'test2@gmail.com',
    description: "User's email",
    uniqueItems: true,
  })
  @Column('text', { unique: true })
  userEmail: string;

  @ApiProperty({
    example: 'Abc123',
    description: "User's password",
  })
  @Column('text', { select: false })
  userPassword: string;

  @ApiProperty({
    example: 'John Doe',
    description: "User's full name",
  })
  @Column('text')
  userFullname: string;

  @ApiProperty({
    example: 'Male',
    description: "The user's gender",
  })
  @Column('text')
  userGender: string;

  @ApiProperty({
    example: '09/21/1999',
    description: "The user's date of birth",
    nullable: true,
  })
  @Column('text', { nullable: true })
  userDateOfBirth: string;

  @ApiProperty({
    example: 'France',
    description: "The user's country of residence",
  })
  @Column('text')
  userCountry: string;

  @ApiProperty({
    nullable: true,
    description: "User's Active flag",
    default: true,
  })
  @Column('boolean', { default: true })
  isActive: boolean;

  @ApiProperty({
    nullable: true,
    description: "User's roles",
    default: ['user'],
  })
  @Column('text', { array: true, default: ['user'] })
  roles: string[];

  // Relationships

  @OneToMany(() => SocialMedia, (socialMedia) => socialMedia.socialMediaUserId)
  socialMedia: SocialMedia;

  // Before Triggers

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.userEmail = this.userEmail.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.userEmail = this.userEmail.toLowerCase().trim();
  }
}
