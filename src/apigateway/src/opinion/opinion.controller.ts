import { Controller, Post, Body } from '@nestjs/common';
import { OpinionService } from './opinion.service';
import { CreateTopicDto } from 'src/opinion-management-service/src/topics/dto/create-topic.dto';

@Controller('opinion')
export class OpinionController {
  constructor(private readonly opinionService: OpinionService) {}

  @Post('topic')
  async createTopic(@Body() createTopicDto: CreateTopicDto) {
    return this.opinionService.createTopic(createTopicDto);
  }

  // ... other endpoints
}
