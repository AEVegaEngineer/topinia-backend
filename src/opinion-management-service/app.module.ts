import { Module } from '@nestjs/common';
import { OpinionManagementServiceModule } from './src/opinion-management-service.module';
import { TopicsModule } from './src/topics/topics.module';
import { UsersModule } from './src/users/users.module';

@Module({
  imports: [OpinionManagementServiceModule, TopicsModule, UsersModule],
})
export class AppModule {}
