import { Module } from '@nestjs/common';
import { TopicsService } from './topics/topics.service';
import { TopicOptionsService } from './topic_options/topic-options.service';
import { OpinionsService } from './opinions/opinions.service';
import { UsersService } from './users/users.service';

@Module({
  controllers: [],
  providers: [],
})
export class OpinionManagementServiceModule {}
