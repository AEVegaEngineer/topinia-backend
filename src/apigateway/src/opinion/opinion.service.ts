import { Injectable, Inject, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTopicDto } from 'src/opinion-management-service/src/topics/dto/create-topic.dto';
import { catchError, timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class OpinionService {
  private readonly logger = new Logger(OpinionService.name);

  constructor(
    @Inject('OPINION_SERVICE') private readonly opinionClient: ClientProxy,
  ) {}

  async createTopic(createTopicDto: CreateTopicDto) {
    this.logger.log('Sending createTopic request');
    return this.opinionClient
      .send('createTopic', createTopicDto)
      .pipe(
        timeout(5000), // Set a timeout of 5 seconds
        catchError((error) => {
          this.logger.error(
            `Error in createTopic: ${error.message}`,
            error.stack,
          );
          return throwError(
            () => new Error('Failed to create topic. Please try again later.'),
          );
        }),
      )
      .toPromise();
  }
}
