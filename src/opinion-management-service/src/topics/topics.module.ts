import { Module } from '@nestjs/common';
import { TopicsService } from './topics.service';

@Module({
  controllers: [],
  providers: [TopicsService],
})
export class TopicsModule {}
