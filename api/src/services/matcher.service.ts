import { Injectable } from '@nestjs/common';
import { IUser } from '../../../models/iUser';
import { IRoute } from '../../../models/iRoute';
import { PythagorasService } from './pythagoras.service';
import {
  PreferenceType,
  PickupLocationPreference,
} from '../../../models/iPreference';
import { Coord } from '../../../models/coord';

@Injectable()
export class MatcherService {
  private routeDistances: RouteDistance[] = [];

  constructor(private readonly pythagorasService: PythagorasService) {}

  getBestMatches(route: IRoute) {}

  addRouteDistances(route: IRoute) {
    const coords = this.getCoordsFor(route);
    const distane = this.pythagorasService.countDistance(coords[0], coords[1]);
    this.routeDistances.push({ user: route.user, distance: distane });
  }

  private getCoordsFor(route: IRoute): [Coord, Coord] {
    const pickup = route.preferences.find(
      route => route.kind === 'PickupLocation',
    ) as PickupLocationPreference | undefined;

    const dropOff = route.preferences.find(
      route => route.kind === 'DropoffLocation',
    ) as PickupLocationPreference | undefined;

    const startCoord: Coord = {
      lat: pickup.properties.lat,
      lon: pickup.properties.lon,
    };

    const endCoord: Coord = {
      lat: dropOff.properties.lat,
      lon: dropOff.properties.lon,
    };

    return [startCoord, endCoord];
  }
}

export interface RouteDistance {
  user: IUser;
  distance: number;
}
