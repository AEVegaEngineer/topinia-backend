import { Injectable } from '@nestjs/common';
import { UsersService } from '../users.service';

@Injectable()
export class CreateUserLambda {
  constructor(private readonly usersService: UsersService) {}

  async resolve(event: any) {
    console.log(event);
    const creationResult = await this.usersService.create(event);
    return creationResult;
  }
}
