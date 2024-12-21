import { Body, Controller, Post, Put } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { CreateTopicDto, UpdateTopicDto } from './dto';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Post('create')
  createTopic(@Body() createTopicDto: CreateTopicDto) {
    return this.topicsService.create(createTopicDto);
  }

  @Put('update')
  updateTopic(@Body() updateTopicDto: UpdateTopicDto) {
    return this.topicsService.update(updateTopicDto);
  }
}
