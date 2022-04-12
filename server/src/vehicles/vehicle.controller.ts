import {
    Body,
    Controller,
    Post,
    Query,
    Get,
    Param,
    ClassSerializerInterceptor,
    UseInterceptors,
} from '@nestjs/common';
import { CreateVehicleDto } from '@root/vehicles/dtos/create-vehicle.dto';

import { VehicleService } from '@root/vehicles/vehicle.service'

@Controller('/api/vehicle')
export class VehicleController {
    constructor(
      private readonly vehicleService: VehicleService,
    ) {}

    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    getAll(@Query() query: { take: number, skip: number }) {
        return this.vehicleService.findAll(query.take, query.skip)
    }
  
    @Post('/create')
    createVehicle(@Body() body: CreateVehicleDto) {
        return this.vehicleService.create(body)
    }

    @Get('/:id')
    @UseInterceptors(ClassSerializerInterceptor)
    getVehicle(@Param('id') id: number) {
        return this.vehicleService.findById(id)
    }
}
