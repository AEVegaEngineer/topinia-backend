import { Module } from '@nestjs/common';
import { ApigatewayModule } from './src/apigateway.module';
import { ApigatewayController } from './src/apigateway.controller';
import { ApigatewayService } from './src/apigateway.service';

@Module({
  imports: [ApigatewayModule],
  controllers: [ApigatewayController],
  providers: [ApigatewayService],
})
export class AppModule {}
