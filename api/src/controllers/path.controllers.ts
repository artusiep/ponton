import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IPath } from '../../../models/iPath';

@Controller('Paths')
export class PathController {
    @Post()
    create(@Body() path: IPath) {
        return 'This action adds a new path';
    }

    @Get()
    findAll() {
        return `This action returns all path items`;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} path`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() path: IPath) {
        return `This action updates a #${id} path`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} path`;
    }
}