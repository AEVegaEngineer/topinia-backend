import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserLambda } from './lambdas/create-user.lambda';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, CreateUserLambda],
})
export class UsersModule {}
