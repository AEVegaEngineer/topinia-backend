import { Module } from '@nestjs/common';
import { TopicOptionsService } from './topic-options.service';

@Module({
  controllers: [],
  providers: [TopicOptionsService],
})
export class TopicOptionsModule {}
