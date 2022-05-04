import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { SalaryCreateInputDto } from './salary/dto/create-salary.dto';
import { SalaryDto } from './salary/dto/salary.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create')
  @MessagePattern({ role: 'item', cmd: 'create' })
  createItem(itemDto: SalaryCreateInputDto) {
    return this.appService.createItem(itemDto);
  }

  @Get()
  @MessagePattern({ role: 'item', cmd: 'get-by-id' })
  getItemById(id: number) {
    return this.appService.getItemById(id);
  }
}
