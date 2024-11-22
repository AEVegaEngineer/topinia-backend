import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('OpinionManagementService');
const PORT = 3001;

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1', // This allows connections from other machines
        port: PORT,
      },
    },
  );
  await app.listen();
  logger.log(`Opinion Management Service is listening on  127.0.0.1:${PORT}`);
}
bootstrap();
