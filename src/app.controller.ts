import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDetail } from './app.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create-user')
  createUser(@Body() user: CreateUserDetail) {
    return this.appService.createUser(user);
  }

  @Get('get-all-user')
  getAllUsers() {
    return this.appService.getAllUsers();
  }

  @Get('get-single-user/:id')
  getSingleUser(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return this.appService.getSingleUser(id);
  }
}
