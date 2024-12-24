import { Body, Controller, Get, Logger, Post, Put } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { CreateTopicDto, UpdateTopicDto } from './dto';
import { CreateTopicLambda } from './lambdas/create-topic.lambda';

const logger = new Logger('TopicsController');

@Controller('topics')
export class TopicsController {
  constructor(
    private readonly topicsService: TopicsService,
    private readonly createTopicLambda: CreateTopicLambda,
  ) {}

  @Get('/')
  root() {
    logger.log(`Hello there`);
    return { message: 'Hello there' };
  }

  @Post('create')
  lambdaCreate(@Body() createTopicDto: CreateTopicDto) {
    logger.log(`lambdaCreate ${JSON.stringify(createTopicDto)}`);
    return this.createTopicLambda.resolve(createTopicDto);
  }
}
