import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VehicleController } from '@root/vehicle/vehicle.controller';
import { VehicleService  } from '@root/vehicle/vehicle.service';
import { Vehicle } from '@root/vehicle/vehicle.entity';

@Module({
  controllers: [VehicleController],
  providers: [
    VehicleService,
  ],
  imports: [TypeOrmModule.forFeature([Vehicle])],
})


export class VehicleModule {}
