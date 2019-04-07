import { Injectable } from '@nestjs/common';
import { IRoute } from '../../../models/iRoute';
import { Route } from './models/route';

@Injectable()
export class RouteService {
  create(route: IRoute) {
    const routeModel = new Route(route);
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
