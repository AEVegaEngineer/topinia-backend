import { Module } from '@nestjs/common';
import { TopicsModule } from './src/topics/topics.module';
import { UsersModule } from './src/auth/users.module';

@Module({
  imports: [TopicsModule, UsersModule],
})
export class AppModule {}
