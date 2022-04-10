import {
    Body,
    Controller,
    Post,
    Get,
    Param,
} from '@nestjs/common';
import { CreateVehicleDto } from '@root/vehicles/dtos/create-vehicle.dto';

import { VehicleService } from '@root/vehicles/vehicle.service'

@Controller('/api/vehicle')
export class VehicleController {
    constructor(
      private readonly vehicleService: VehicleService,
    ) {}
  
    @Post('/create')
    createVehicle(@Body() body: CreateVehicleDto) {
        return this.vehicleService.create(body)
    }

    @Get('/:id')
    getVehicle(@Param('id') id: number) {
        return this.vehicleService.findById(id)
    }
}
