import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OpinionController } from './opinion.controller';
import { OpinionService } from './opinion.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'OPINION_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [OpinionController],
  providers: [OpinionService],
})
export class OpinionModule {}
