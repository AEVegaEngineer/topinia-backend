import { Test, TestingModule } from '@nestjs/testing';
import { OpinionManagementServiceController } from './opinion-management-service.controller';
import { OpinionManagementServiceService } from './opinion-management-service.service';

describe('OpinionManagementServiceController', () => {
  let controller: OpinionManagementServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpinionManagementServiceController],
      providers: [OpinionManagementServiceService],
    }).compile();

    controller = module.get<OpinionManagementServiceController>(OpinionManagementServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
