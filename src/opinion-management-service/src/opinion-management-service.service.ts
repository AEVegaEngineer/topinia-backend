import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './topics/dto/create-topic.dto';
import { UpdateTopicDto } from './topics/dto/update-topic.dto';

@Injectable()
export class OpinionManagementServiceService {
  createTopic(createTopicDto: CreateTopicDto) {
    return 'This action adds a new Topic';
  }

  updateTopic(updateTopicDto: UpdateTopicDto) {
    return 'This action updates a Topic';
  }
}
