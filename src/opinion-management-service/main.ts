import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const IS_LOCAL_ENVIRONMENT = process.env.ENV_NAME === 'local';

async function bootstrap() {
  if (IS_LOCAL_ENVIRONMENT) {
    const app = await NestFactory.create(AppModule);
    await app.listen(4001);
    const hosted = await app.getUrl();
    console.debug('\x1b[0m', `available at:${hosted}`);
    return;
  } else {
    const ms = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    );
    await ms.listen();
  }
}
bootstrap();
