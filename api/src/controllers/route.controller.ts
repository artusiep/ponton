import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Route } from '../../../models/route';

@Controller('routes')
export class RouteController {
  @Post()
  create(@Body() route: Route) {
    return 'This action adds a new route';
  }

  @Get()
  findAll() {
    return `This action returns all route items`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} route`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() route: Route) {
    return `This action updates a #${id} route`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} route`;
  }
}