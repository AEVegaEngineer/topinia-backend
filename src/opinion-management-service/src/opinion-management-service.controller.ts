import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OpinionManagementServiceService } from './opinion-management-service.service';
import { CreateTopicDto as UpdateTopicDto } from './topics/dto/create-topic.dto';

@Controller()
export class OpinionManagementServiceController {
  constructor(
    private readonly opinionManagementServiceService: OpinionManagementServiceService,
  ) {}

  @MessagePattern('createTopic')
  createTopic(@Payload() createTopicDto: UpdateTopicDto) {
    return this.opinionManagementServiceService.createTopic(createTopicDto);
  }

  @MessagePattern('updateTopic')
  updateTopic(@Payload() updateTopicDto: UpdateTopicDto) {
    return this.opinionManagementServiceService.updateTopic(updateTopicDto);
  }
}
