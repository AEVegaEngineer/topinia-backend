import { Test, TestingModule } from '@nestjs/testing';
import { ApigatewayController } from './apigateway.controller';
import { ApigatewayService } from './apigateway.service';

describe('ApigatewayController', () => {
  let controller: ApigatewayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApigatewayController],
      providers: [ApigatewayService],
    }).compile();

    controller = module.get<ApigatewayController>(ApigatewayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
