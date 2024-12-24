import express from 'express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Context, Handler } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';

const logger = new Logger('OpinionManagementService');
const PORT = 4000;
let cachedServer: Server;

async function bootstrap() {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const app = await NestFactory.create(AppModule, adapter);

  if (process.env.ENV_NAME !== 'prod') {
    await app.listen(PORT);
    logger.log(`Opinion Management Service is listening on  127.0.0.1:${PORT}`);
  } else {
    await app.init();
    return createServer(expressApp);
  }
}

export const handler: Handler = async (event: any, context: Context) => {
  if (!cachedServer) {
    cachedServer = await bootstrap();
  }
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};

bootstrap();
