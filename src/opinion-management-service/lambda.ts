import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Context, Handler } from 'aws-lambda';
import express from 'express';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';

let cachedServer: Server;

async function bootstrap(): Promise<Server> {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const app = await NestFactory.create(AppModule, adapter);
  await app.init();
  return createServer(expressApp);
}

export const handler: Handler = async (event: any, context: Context) => {
  if (!cachedServer) {
    cachedServer = await bootstrap();
  }
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
