import { Injectable } from '@nestjs/common';
import { CreateTopicOptionDto } from './dto/create-topic-option.dto';
import { UpdateTopicOptionDto } from './dto/update-topic.dto';

@Injectable()
export class TopicOptionsService {
  create(createTopicDto: CreateTopicOptionDto) {
    return 'This action adds a new topic';
  }

  findAll() {
    return `This action returns all topics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} topic`;
  }

  update(id: number, updateTopicDto: UpdateTopicOptionDto) {
    return `This action updates a #${id} topic`;
  }

  remove(id: number) {
    return `This action removes a #${id} topic`;
  }
}
