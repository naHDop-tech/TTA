import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CityController } from '@root/city/city.controller';
import { CityService  } from '@root/city/city.service';
import { RoadService } from '@root/road/road.service'
import { BranchOfficeService } from '@root/branch-office/branch-office.service'
import { CityEntity } from '@root/city/city.entity';

@Module({
  controllers: [CityController],
  providers: [
    CityService,
    BranchOfficeService,
    RoadService
  ],
  imports: [TypeOrmModule.forFeature([CityEntity])],
  exports: [CityService, BranchOfficeService, RoadService]
})


export class CityModule {}
