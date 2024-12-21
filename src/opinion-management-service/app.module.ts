import { Module } from '@nestjs/common';
import { OpinionManagementServiceModule } from './src/opinion-management-service.module';
import { TopicsModule } from './src/topics/topics.module';

@Module({
  imports: [OpinionManagementServiceModule, TopicsModule],
})
export class AppModule {}
