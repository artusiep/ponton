import { Injectable } from '@nestjs/common';
import { IRoute } from '../../../models/iRoute';

@Injectable()
export class RouteService {
  private routes: IRoute[] = [];

  create(route: IRoute) {
    this.routes.push(route);
  }

  findAll(): IRoute[] {
    return this.routes;
  }

  findOne(id: string) {
    return this.routes.find(route => id === route.id);
  }

  update(id: string, route: IRoute) {
    const updatedRoutes = this.routes.map(oldRoute =>
      id === oldRoute.id ? route : oldRoute,
    );

    this.routes = updatedRoutes;
  }
}
