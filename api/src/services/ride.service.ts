import { Injectable } from '@nestjs/common';
import { Ride } from '../../../models/ride';

@Injectable()
export class RideService {
  private rides: Ride[] = [];

  create(ride: Ride) {
    this.rides.push(ride);
  }

  findAll(): Ride[] {
    return this.rides;
  }

  findOne(id: string) {
    return this.rides.find(ride => id === ride.id);
  }

  update(id: string, ride: Ride) {
    const updatedRides = this.rides.map(oldRide =>
      id === oldRide.id ? ride : oldRide,
    );

    this.rides = updatedRides;
  }
}
