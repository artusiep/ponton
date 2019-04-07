
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { IRoute } from '../../../models/iRoute';
import { RouteService } from '../services/route.service';
import { MatcherService } from '../services/matcher.service';

@Controller('routes')
export class RouteController {
  constructor(private readonly routeService: RouteService,
              private readonly matcherService: MatcherService) {
  }

  @Post()
  async create(@Body() route: IRoute) {
    const dbRoute = await this.routeService.create(route);
    this.matcherService.handleNewRoute();
    return dbRoute;
  }

  @Get()
  findAll() {
    return this.routeService.findAll();
  }
  //
  @Get('user/:id')
    findOne(@Param('id') id: string) {
      return this.routeService.findUser(id);
    }

  /* tslint:disable:variable-name */
  @Get('id/:_id')
  find(@Param('_id') id: string) {
    return this.routeService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() route: IRoute) {
    return `This action updates a #${id} route`;
  }
}
