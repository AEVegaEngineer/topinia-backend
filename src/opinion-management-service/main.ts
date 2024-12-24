import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APIGatewayProxyHandler } from 'aws-lambda';
import serverlessExpress from '@vendia/serverless-express';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

let cachedServer: any;

async function bootstrap() {
  if (!cachedServer) {
    const expressApp = express();
    const adapter = new ExpressAdapter(expressApp);
    const app = await NestFactory.create(AppModule, adapter);
    await app.init();

    cachedServer = serverlessExpress({ app: expressApp });
  }
  return cachedServer;
}

export const handler: APIGatewayProxyHandler = async (event, context) => {
  console.log('Lambda function invoked');
  console.log('Event:', JSON.stringify(event));

  context.callbackWaitsForEmptyEventLoop = false;

  const server = await bootstrap();
  console.log('Server bootstrapped');

  return server(event, context);
};
