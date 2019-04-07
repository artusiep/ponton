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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rideService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() ride: IRide) {
    return `This action updates a #${id} ride`;
  }
}
