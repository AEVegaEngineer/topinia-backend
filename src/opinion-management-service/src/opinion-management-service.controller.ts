import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OpinionManagementServiceService } from './opinion-management-service.service';
import { CreateTopicDto } from './topics/dto/create-topic.dto';
import { UpdateTopicDto } from './topics/dto/update-topic.dto';

@Controller()
export class OpinionManagementServiceController {
  constructor(
    private readonly opinionManagementServiceService: OpinionManagementServiceService,
  ) {}

  @MessagePattern('createTopic')
  create(@Payload() createTopicDto: CreateTopicDto) {
    return this.opinionManagementServiceService.createTopic(createTopicDto);
  }
}
