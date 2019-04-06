import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Preference } from '../../../models/preference';

@Controller('preferences')
export class PreferenceController {
  @Post()
  create(@Body() preference: Preference) {
    return 'This action adds a new preference';
  }

  @Get()
  findAll() {
    return `This action returns all preference items`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} preference`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() preference: Preference) {
    return `This action updates a #${id} preference`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} preference`;
  }
}