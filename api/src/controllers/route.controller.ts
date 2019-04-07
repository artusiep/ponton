import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { IRoute } from '../../../models/iRoute';
import { MatcherService } from '../services/matcher.service';

@Controller('routes')
export class RouteController {
  constructor(private readonly matcherService: MatcherService) {}
  @Post()
  create(@Body() route: IRoute) {
    return this.matcherService.test(route);
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
  update(@Param('id') id: string, @Body() route: IRoute) {
    return `This action updates a #${id} route`;
  }
}
