import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApigatewayService } from './apigateway.service';

@Controller('apigateway')
export class ApigatewayController {
  constructor(private readonly apigatewayService: ApigatewayService) {}

  @Get()
  findAll() {
    return this.apigatewayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apigatewayService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apigatewayService.remove(+id);
  }
}
