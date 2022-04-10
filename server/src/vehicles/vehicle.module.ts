import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VehicleController } from '@root/vehicles/vehicle.controller';
import { VehicleService  } from '@root/vehicles/vehicle.service';
import { Vehicle } from '@root/vehicles/vehicle.entity';

@Module({
  controllers: [VehicleController],
  providers: [
    VehicleService,
  ],
  imports: [TypeOrmModule.forFeature([Vehicle])],
})


export class VehicleModule {}
