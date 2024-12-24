import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'userInterest' })
export class UserInterest {
  @ApiProperty({
    example: '1022c266-8803-4916-a20c-08bb2a6ebf17',
    description: 'Social Media Registry ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  userInterestId: string;

  @ApiProperty({
    example: '1022c266-8803-4916-a20c-08bb2a6ebf17',
    description: 'Foreign Key: User reference ID, this user has this interest',
  })
  @Column('text')
  userInterestUserId: string;

  @ApiProperty({
    example: '1022c266-8803-4916-a20c-08bb2a6ebf17',
    description: 'Foreign Key: Interest reference ID',
  })
  @Column('text')
  interestId: string;
}
