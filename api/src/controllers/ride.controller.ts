import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Ride } from '../../../models/ride';

@Controller('rides')
export class RideController {
  @Post()
  create(@Body() ride: Ride) {
    return 'This action adds a new ride';
  }

  @Get()
  findAll() {
    return `This action returns all rides items`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} ride`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() ride: Ride) {
    return `This action updates a #${id} ride`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} ride`;
  }
}