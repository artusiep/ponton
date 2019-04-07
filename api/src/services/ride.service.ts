import { Injectable } from '@nestjs/common';
import { IRide } from '../../../models/iRide';
import { Ride } from './models/ride';

@Injectable()
export class RideService {
  create(ride: IRide): Promise<IRide> {
    const rideModel = new Ride(ride);
    return rideModel.save();
  }

  findAll() {
    return Ride.find({});
  }

  findOne(id: string) {
    return Ride.findOne({id});
  }

  update(id: string, ride: IRide) {
    return 'Not implemented';
  }
}
