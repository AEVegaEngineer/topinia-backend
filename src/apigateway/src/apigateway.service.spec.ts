import { Test, TestingModule } from '@nestjs/testing';
import { ApigatewayService } from './apigateway.service';

describe('ApigatewayService', () => {
  let service: ApigatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApigatewayService],
    }).compile();

    service = module.get<ApigatewayService>(ApigatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
