import { Test, TestingModule } from '@nestjs/testing';
import { OpinionManagementServiceService } from './opinion-management-service.service';

describe('OpinionManagementServiceService', () => {
  let service: OpinionManagementServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpinionManagementServiceService],
    }).compile();

    service = module.get<OpinionManagementServiceService>(OpinionManagementServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
