import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './topics/dto/create-topic.dto';

@Injectable()
export class OpinionManagementServiceService {
  createTopic(createTopicDto: CreateTopicDto) {
    return 'This action adds a new Topic';
  }
}
