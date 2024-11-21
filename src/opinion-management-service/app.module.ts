import { Module } from '@nestjs/common';
import { OpinionManagementServiceModule } from './src/opinion-management-service.module';
import { OpinionManagementServiceController } from './src/opinion-management-service.controller';
import { OpinionManagementServiceService } from './src/opinion-management-service.service';

@Module({
  imports: [OpinionManagementServiceModule],
  controllers: [OpinionManagementServiceController],
  providers: [OpinionManagementServiceService],
})
export class AppModule {}
