import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APIGatewayProxyHandler } from 'aws-lambda';
import serverlessExpress from '@vendia/serverless-express';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

let cachedServer: any;

async function bootstrap() {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const app = await NestFactory.create(AppModule, adapter);
  await app.init();

  return app;
}

export const handler: APIGatewayProxyHandler = async (event, context) => {
  logger.log(`Event: ${JSON.stringify(event)}`);

  context.callbackWaitsForEmptyEventLoop = false;

  if (!cachedServer) {
    const app = await bootstrap();
    cachedServer = serverlessExpress({
      app: app.getHttpAdapter().getInstance(),
    });
  }

  logger.log('Server bootstrapped');

  return cachedServer(event, context);
};

// For local development
if (process.env.NODE_ENV !== 'production') {
  (async () => {
    try {
      const app = await bootstrap();
      const port = process.env.OPINION_MANAGEMENT_SERVICE_PORT || 4000;
      await app.listen(port);
      logger.log(`Application is running on: http://localhost:${port}`);
    } catch (error) {
      logger.error('Error starting server', error);
    }
  })();
}
