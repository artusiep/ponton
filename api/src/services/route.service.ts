import { Injectable } from '@nestjs/common';
import { IRoute } from '../../../models/iRoute';
import { Route } from './models/route';
import { MatcherService } from './matcher.service';

@Injectable()
export class RouteService {

  constructor(private readonly matcherService: MatcherService) {}

  create(route: IRoute) {
    const routeModel = new Route(route);
    this.matcherService.handleRoute(route);
    return routeModel.save();
  }

  findAll() {
    return Route.find({});
  }

  // tslint:disable-next-line:variable-name
  findOne(_id: string) {
    return Route.findOne({_id});
  }

  findUser(id: string) {
    return Route.findOne({user: {id}});
  }

  update(id: string, route: IRoute) {
    return 'Not implemented';
  }
}
