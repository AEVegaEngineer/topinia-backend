import { Injectable, Inject, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {
  CreateTopicDto,
  UpdateTopicDto,
} from 'src/opinion-management-service/src/topics/dto';

@Injectable()
export class OpinionService {
  private readonly logger = new Logger(OpinionService.name);

  constructor(
    @Inject('OPINION_SERVICE') private readonly opinionClient: ClientProxy,
  ) {}

  private sendMessage<T, R>(pattern: string, data: T): Promise<R> {
    this.logger.log(`Sending ${pattern} request`);
    return this.opinionClient
      .send<R, T>(pattern, data)
      .pipe(
        timeout(5000), // Set a timeout of 5 seconds
        catchError((error) => {
          this.logger.error(
            `Error in ${pattern}: ${error.message}`,
            error.stack,
          );
          return throwError(
            () => new Error(`Failed to ${pattern}. Please try again later.`),
          );
        }),
      )
      .toPromise();
  }

  async createTopic(createTopicDto: CreateTopicDto) {
    return this.sendMessage<CreateTopicDto, any>('createTopic', createTopicDto);
  }

  async updateTopic(updateTopicDto: UpdateTopicDto) {
    return this.sendMessage<UpdateTopicDto, any>('updateTopic', updateTopicDto);
  }
}
