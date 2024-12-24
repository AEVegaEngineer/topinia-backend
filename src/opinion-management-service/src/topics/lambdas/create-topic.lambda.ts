import { Injectable } from '@nestjs/common';
import { TopicsService } from '../topics.service';

@Injectable()
export class CreateTopicLambda {
  constructor(private readonly topicsService: TopicsService) {}

  async resolve(event: any) {
    console.log(event);
    const creationResult = await this.topicsService.create(event);
    return creationResult;
  }
}
