import { Module } from '@nestjs/common';
import { ApigatewayService } from './apigateway.service';
import { ApigatewayController } from './apigateway.controller';

@Module({
  controllers: [ApigatewayController],
  providers: [ApigatewayService],
})
export class ApigatewayModule {}
