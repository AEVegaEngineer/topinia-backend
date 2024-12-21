import { Body, Controller, Logger, Post, Put } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { CreateTopicDto, UpdateTopicDto } from './dto';

const logger = new Logger('TopicsController');

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Post('create')
  createTopic(@Body() createTopicDto: CreateTopicDto) {
    logger.log(`createTopic ${JSON.stringify(createTopicDto)}`);
    return this.topicsService.create(createTopicDto);
  }

  @Put('update')
  updateTopic(@Body() updateTopicDto: UpdateTopicDto) {
    logger.log(`updateTopic ${JSON.stringify(updateTopicDto)}`);
    return this.topicsService.update(updateTopicDto);
  }
}
