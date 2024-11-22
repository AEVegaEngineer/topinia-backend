import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('APIGateway');
const API_GATEWAY_PORT = 4000;
const OPINION_SERVICE_PORT = 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(API_GATEWAY_PORT, '0.0.0.0');
  logger.log(
    `API Gateway is available at: ${await app.getUrl()}, PORT:${API_GATEWAY_PORT}`,
  );
  logger.log(
    `Connected to Opinion Management Service on localhost:${OPINION_SERVICE_PORT}`,
  );
}
bootstrap();
