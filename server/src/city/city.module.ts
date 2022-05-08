import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CityController } from '@root/city/city.controller';
import { CityService  } from '@root/city/city.service';
import { CityEntity } from '@root/city/city.entity';

@Module({
  controllers: [CityController],
  providers: [
    CityService,
  ],
  imports: [TypeOrmModule.forFeature([CityEntity])],
  exports: [CityService]
})


export class CityModule {}
