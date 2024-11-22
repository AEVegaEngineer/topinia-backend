import { Module } from '@nestjs/common';
import { ApigatewayModule } from './src/apigateway.module';
import { OpinionModule } from './src/opinion/opinion.module';

@Module({
  imports: [ApigatewayModule, OpinionModule],
  // controllers: [],
  providers: [],
})
export class AppModule {}
