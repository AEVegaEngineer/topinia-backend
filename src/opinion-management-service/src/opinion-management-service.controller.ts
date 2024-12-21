import { Body, Controller, Post, Put } from '@nestjs/common';
import { OpinionManagementServiceService } from './opinion-management-service.service';
import { CreateTopicDto } from './topics/dto/create-topic.dto';
import { UpdateTopicDto } from './topics/dto';

@Controller()
export class OpinionManagementServiceController {
  constructor(
    private readonly opinionManagementServiceService: OpinionManagementServiceService,
  ) {}

  @Post('createTopic')
  createTopic(@Body() createTopicDto: CreateTopicDto) {
    return this.opinionManagementServiceService.createTopic(createTopicDto);
  }

  @Put('updateTopic')
  updateTopic(@Body() updateTopicDto: UpdateTopicDto) {
    return this.opinionManagementServiceService.updateTopic(updateTopicDto);
  }
}
