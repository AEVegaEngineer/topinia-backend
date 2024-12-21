import { Module } from '@nestjs/common';
import { OpinionsService } from './opinions.service';

@Module({
  controllers: [],
  providers: [OpinionsService],
})
export class TopicsModule {}
