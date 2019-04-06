import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Path } from '../../../models/path';

@Controller('Paths')
export class PathController {
  @Post()
  create(@Body() path: Path) {
    return 'This action adds a new path';
  }

  @Get()
  findAll() {
    return `This action returns all path items`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} path`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() path: Path) {
    return `This action updates a #${id} path`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} path`;
  }
}