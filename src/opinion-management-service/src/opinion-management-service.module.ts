import { Module } from '@nestjs/common';
import { OpinionManagementServiceService } from './opinion-management-service.service';
import { OpinionManagementServiceController } from './opinion-management-service.controller';

@Module({
  controllers: [OpinionManagementServiceController],
  providers: [OpinionManagementServiceService],
})
export class OpinionManagementServiceModule {}
