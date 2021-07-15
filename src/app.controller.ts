import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

import { ValidationPipe } from './common/pipes';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(':id')
  getHelloById(@Param('id', ValidationPipe) id: string): string {
    return this.appService.getHelloById();
  }
}
