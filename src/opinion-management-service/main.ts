import express from 'express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('OpinionManagementService');
const PORT = 4000;

async function bootstrap() {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const app = await NestFactory.create(AppModule, adapter);

  if (process.env.ENV_NAME !== 'prod') {
    await app.listen(PORT);
    logger.log(`Opinion Management Service is listening on  127.0.0.1:${PORT}`);
  } else {
    await app.init();
  }
}

bootstrap();
