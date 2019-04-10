import { HttpService, Injectable } from '@nestjs/common';
import { IUser } from '../../../models/iUser';
import { IRoute } from '../../../models/iRoute';
import { PythagorasService } from './pythagoras.service';
import { PickupLocationPreference } from '../../../models/iPreference';
import { RouteService } from './route.service';
import { RideService } from './ride.service';

@Injectable()
export class MatcherService {
  private static readonly apiUrl =
    'https://api.mapbox.com/optimized-trips/v1/mapbox/driving';
  private static readonly apiKey =
    'pk.eyJ1IjoiZ3V6emlrc2VuOTYiLCJhIjoiY2p1NXNhdGt3MWMxaDQzc2FlYnB5cmg4YiJ9.6ol5G64nkRQX4YJHdr6B0w';

  constructor(
    private readonly pythagorasService: PythagorasService,
    private readonly httpService: HttpService,
    private readonly routeService: RouteService,
    private readonly rideService: RideService,
  ) {}

  getBestMatches(route: IRoute) {}

  async handleNewRoute() {
    const routes = await this.routeService.findAll().exec();

    const coordinates = routes.map(r => this.getCoordsFor(r));
    if (!(coordinates.length > 0)) {
      return;
    }

    const [left, right] = coordinates[0].split(';');
    const coords = `${left}${
      routes.length >= 2 ? ';' + coordinates.slice(1).join(';') : ''
    };${right}`;

    const distributions = `${
      routes.length >= 2
        ? Array(Math.floor(routes.length - 1))
            .fill(null)
            .map((_, i) => `${i * 2 + 1},${i * 2 + 2}`)
            .join(';')
        : ''
    }`;

    const radiuses = routes.map(x =>
      x.preferences.find(p => p.kind === 'PickupLocation'),
    );

    console.log(
      `${MatcherService.apiUrl}/${coords}?distributions=${distributions}`,
    );

    this.httpService
      .get(
        `${MatcherService.apiUrl}/${coords}?distributions=${distributions}`,
        {
          params: {
            roundtrip: 'false',
            overview: 'full',
            steps: 'true',
            geometries: 'geojson',
            source: 'first',
            destination: 'last',
            access_token: MatcherService.apiKey,
          },
        },
      )
      .subscribe(async response => {
        console.log(response.data);
        const data = response.data;
        const ride = await this.rideService.findLast(routes[0].user.id).exec();
        const trip = ride ? ride.path.trips[0] : { distance: Infinity };
        const prevDist = trip.distance;

        const newTrip = data.trips[0];
        if (newTrip && newTrip.distance < 1.5 * prevDist) {
          console.log("Saving rides o DB");
          this.rideService.create({
            id: `${Math.random()}`,
            path: data,
            routes,
          });
        }
      }, console.log);
  }

  private getCoordsFor(route: IRoute): string {
    const pickup = route.preferences.find(r => r.kind === 'PickupLocation') as
      | PickupLocationPreference
      | undefined;

    const dropOff = route.preferences.find(
      r => r.kind === 'DropoffLocation',
    ) as PickupLocationPreference | undefined;

    const startCoord = pickup.properties;

    const endCoord = dropOff.properties;

    return `${startCoord.lon},${startCoord.lat};${endCoord.lon},${
      endCoord.lat
    }`;
  }
}

export interface RouteDistance {
  user: IUser;
  distance: number;
}
