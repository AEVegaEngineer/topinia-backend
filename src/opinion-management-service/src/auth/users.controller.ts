import { Body, Controller, Get, Logger, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { CreateUserLambda } from './lambdas/create-user.lambda';

const logger = new Logger('UsersController');

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly createUserLambda: CreateUserLambda,
  ) {}

  @Get('/')
  root() {
    logger.log(`Hello there`);
    return { message: 'Hello there' };
  }

  @Post('create')
  lambdaCreate(@Body() createUserDto: CreateUserDto) {
    logger.log(`lambdaCreate ${JSON.stringify(createUserDto)}`);
    return this.createUserLambda.resolve(createUserDto);
  }
}
