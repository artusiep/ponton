import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { IRide } from '../../../models/iRide';

@Controller('rides')
export class RideController {
    @Post()
    create(@Body() ride: IRide) {
        return 'This action adds a new ride';
    }

    @Get()
    findAll() {
        return `This action returns all ride items`;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} ride`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() ride: IRide) {
        return `This action updates a #${id} ride`;
    }
}
