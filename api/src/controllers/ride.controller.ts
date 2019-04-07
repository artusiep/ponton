import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { IRide } from '../../../models/iRide';
import { RideService } from '../services/ride.service';

@Controller('rides')
export class RideController {
  constructor(private readonly rideService: RideService) {
  }
  @Post()
  create(@Body() ride: IRide) {
    return this.rideService.create(ride);
  }

  @Get()
  findAll() {
    return this.rideService.findAll();
  }

  @Get('last/:id')
  findLast(@Param('id') id: string) {
    return this.rideService.findLast(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rideService.findOne(id);
  }

  @Get('user/:id')
  findUserRides(@Param('id') id: string) {
    return this.rideService.findUserRides(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() ride: IRide) {
    return `This action updates a #${id} ride`;
  }
}
