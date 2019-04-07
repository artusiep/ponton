import { Injectable } from '@nestjs/common';
import { IRide } from '../../../models/iRide';

@Injectable()
export class RideService {
  private rides: IRide[] = [];

  create(ride: IRide) {
    this.rides.push(ride);
  }

  findAll(): IRide[] {
    return this.rides;
  }

  findOne(id: string) {
    return this.rides.find(ride => id === ride.id);
  }

  update(id: string, ride: IRide) {
    const updatedRides = this.rides.map(oldRide =>
      id === oldRide.id ? ride : oldRide,
    );

    this.rides = updatedRides;
  }
}
