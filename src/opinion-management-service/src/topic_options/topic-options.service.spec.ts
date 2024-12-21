import { Test, TestingModule } from '@nestjs/testing';
import { TopicOptionsService } from './topic-options.service';

describe('TopicOptionsService', () => {
  let service: TopicOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopicOptionsService],
    }).compile();

    service = module.get<TopicOptionsService>(TopicOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
