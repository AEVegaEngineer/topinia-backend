import { Module } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { TopicsController } from './topics.controller';
import { CreateTopicLambda } from './lambdas/create-topic.lambda';

const isLocalDevelopment = process.env.ENV_NAME === 'local';
const controllers = isLocalDevelopment ? [TopicsController] : undefined;
@Module({
  controllers,
  providers: [TopicsService, CreateTopicLambda],
})
export class TopicsModule {}
