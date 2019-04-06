import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { User } from '../../../models/user';

@Controller('users')
export class UserController {
  @Post()
  create(@Body() user: User) {
    return 'This action adds a new user';
  }

  @Get()
  findAll() {
    return `This action returns all user items`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} user`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: User) {
    return `This action updates a #${id} user`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} user`;
  }
}