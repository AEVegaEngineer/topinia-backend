import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
const logger = new Logger('UsersService');
@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    logger.log({
      Method: 'create',
      createUserDto: JSON.stringify(createUserDto),
    });
    return 'This action adds a new user';
  }

  findAll() {
    logger.log({
      Method: 'findAll',
    });
    return `This action returns all users`;
  }

  findOne(id: string) {
    logger.log({
      Method: 'findOne',
      id,
    });
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    logger.log({
      Method: 'update',
      id,
      updateUserDto: JSON.stringify(updateUserDto),
    });
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    logger.log({
      Method: 'remove',
      id,
    });
    return `This action removes a #${id} user`;
  }
}
