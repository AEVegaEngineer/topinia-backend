import { Injectable } from '@nestjs/common';

@Injectable()
export class ApigatewayService {
  findAll() {
    return `This action returns all apigateway`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apigateway`;
  }

  remove(id: number) {
    return `This action removes a #${id} apigateway`;
  }
}
