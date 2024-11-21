import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTopicDto } from 'src/opinion-management-service/src/topics/dto/create-topic.dto';

@Injectable()
export class OpinionService {
  constructor(
    @Inject('OPINION_SERVICE') private readonly opinionClient: ClientProxy,
  ) {}

  async createTopic(createTopicDto: CreateTopicDto) {
    return this.opinionClient.send('createTopic', createTopicDto).toPromise();
  }

  // ... other methods
}
