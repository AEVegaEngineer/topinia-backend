import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserInterest } from '../../user_interest/entities/user-interest.entity';

@Entity({ name: 'interest' })
export class Interest {
  @ApiProperty({
    example: '1022c266-8803-4916-a20c-08bb2a6ebf17',
    description: 'Social Media Registry ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  interestId: string;

  @ApiProperty({
    example: 'Data Science',
    description:
      'The name of the interest, which is the subject of the opinion',
  })
  @Column('text')
  interest_name: string;

  @OneToMany(() => UserInterest, (userInterest) => userInterest.interestId)
  userInterest: UserInterest;
}
