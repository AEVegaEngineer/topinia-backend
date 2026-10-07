import { TopicsController } from './topics.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { TopicsService } from './topics.service';
import { CreateTopicLambda } from './lambdas/create-topic.lambda';

describe('TopicsController', () => {
  let controller: TopicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopicsController],
      providers: [TopicsService, CreateTopicLambda],
    }).compile();

    controller = module.get<TopicsController>(TopicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
