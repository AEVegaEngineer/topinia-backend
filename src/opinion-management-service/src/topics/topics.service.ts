import { Injectable, Logger } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';

const logger = new Logger('TopicsService');
@Injectable()
export class TopicsService {
  create(createTopicDto: CreateTopicDto) {
    logger.log(`create ${JSON.stringify(createTopicDto)}`);
    return 'This action adds a new topic';
  }

  findAll() {
    logger.log('findAll');
    return `This action returns all topics`;
  }

  findOne(id: number) {
    logger.log(`findOne ${id}`);
    return `This action returns a #${id} topic`;
  }

  update(updateTopicDto: UpdateTopicDto) {
    logger.log(`update ${JSON.stringify(updateTopicDto)}`);
    return `This action updates a #${updateTopicDto.topic_id} topic`;
  }

  remove(id: number) {
    logger.log(`remove ${id}`);
    return `This action removes a #${id} topic`;
  }
}
