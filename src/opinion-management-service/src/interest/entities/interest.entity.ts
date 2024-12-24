import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'interest' })
export class Interest {
  @ApiProperty({
    example: '1022c266-8803-4916-a20c-08bb2a6ebf17',
    description: 'Social Media Registry ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  interest_id: string;

  @ApiProperty({
    example: 'Data Science',
    description:
      'The name of the interest, which is the subject of the opinion',
  })
  @Column('text')
  interest_name: string;
}
