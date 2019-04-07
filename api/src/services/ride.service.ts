import { Injectable } from '@nestjs/common';
import { IRide } from '../../../models/iRide';
import { Ride } from './models/ride';

@Injectable()
export class RideService {
  create(ride: IRide): Promise<IRide> {
    const rideModel = new Ride({...ride, date: Date.now()});
    return rideModel.save();
  }

  findAll() {
    return Ride.find({});
  }

  findLast(userId: string) {
    return Ride.findOne({'routes.user.id': userId}).sort({date: 'desc'});
  }

  findOne(id: string) {
    return Ride.findOne({id});
  }

  async findUserRides(userId: string) {
    return Ride.find({'routes.user.id': userId});
  }

  update(id: string, ride: IRide) {
    return 'Not implemented';
  }
}
