import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { IPath } from '../../../models/iPath';
import { PathService } from '../services/path.service';

@Controller('Paths')
export class PathController {
  constructor(private readonly pathService: PathService) {
  }

  @Post()
  create(@Body() path: IPath) {
    return this.pathService.create(path);
  }

  @Get()
  findAll() {
    return this.pathService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pathService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() path: IPath) {
    return `This action updates a #${id} path`;
  }
}
