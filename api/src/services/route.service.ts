import { Injectable } from '@nestjs/common';
import { Route } from '../../../models/route';

@Injectable()
export class RouteService {
  private routes: Route[] = [];

  create(route: Route) {
    this.routes.push(route);
  }

  findAll(): Route[] {
    return this.routes;
  }

  findOne(id: string) {
    return this.routes.find(route => id === route.id);
  }

  update(id: string, route: Route) {
    const updatedRoutes = this.routes.map(oldRoute =>
      id === oldRoute.id ? route : oldRoute,
    );

    this.routes = updatedRoutes;
  }
}
