import { Controller, Post, Body, Put } from '@nestjs/common';
import { OpinionService } from './opinion.service';
import {
  CreateTopicDto,
  UpdateTopicDto,
} from 'src/opinion-management-service/src/topics/dto/index';

@Controller('opinion')
export class OpinionController {
  constructor(private readonly opinionService: OpinionService) {}

  @Post('topic')
  async createTopic(@Body() createTopicDto: CreateTopicDto) {
    return this.opinionService.createTopic(createTopicDto);
  }

  @Put('topic')
  async updateTopic(@Body() updateTopicDto: UpdateTopicDto) {
    return this.opinionService.updateTopic(updateTopicDto);
  }
}
