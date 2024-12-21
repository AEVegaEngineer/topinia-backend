import { Injectable } from '@nestjs/common';
import { CreateOpinionDto } from './dto/create-opinion.dto';
import { UpdateOpinionDto } from './dto/update-opinion.dto';

@Injectable()
export class OpinionsService {
  create(createTopicDto: CreateOpinionDto) {
    return 'This action adds a new topic';
  }

  findAll() {
    return `This action returns all topics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} topic`;
  }

  update(id: number, updateTopicDto: UpdateOpinionDto) {
    return `This action updates a #${id} topic`;
  }

  remove(id: number) {
    return `This action removes a #${id} topic`;
  }
}
