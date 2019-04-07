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
  constructor(private readonly pythagorasService: PythagorasService) {}

  getBestMatches(route: IRoute) {}

  test(route: IRoute): string {
    const pickup = route.preferences.find(
      route => route.kind === 'PickupLocation',
    ) as PickupLocationPreference | undefined;

    const dropOff = route.preferences.find(
      route => route.kind === 'DropoffLocation',
    ) as PickupLocationPreference | undefined;

      if (pickup === undefined || dropOff === undefined) {
        return "Zjebalo sie"
      }

    const startCoord: Coord = {
      lat: pickup.properties.lat,
      lon: pickup.properties.lon,
    };

    const endCoord: Coord = {
      lat: dropOff.properties.lat,
      lon: dropOff.properties.lon,
    };

    return String(this.pythagorasService.countDistance(startCoord, endCoord));
  }
}

export interface RouteDistance {
  user: IUser;
  distance: number;
}
