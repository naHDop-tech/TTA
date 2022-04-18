import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VehicleController } from '@root/vehicle/vehicle.controller';
import { VehicleService  } from '@root/vehicle/vehicle.service';
import { VehicleEntity } from '@root/vehicle/vehicle.entity';

@Module({
  controllers: [VehicleController],
  providers: [
    VehicleService,
  ],
  imports: [TypeOrmModule.forFeature([VehicleEntity])],
  exports: [VehicleService]
})


export class VehicleModule {}
