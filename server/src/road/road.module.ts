import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoadController } from '@root/road/road.controller';
import { RoadService } from '@root/road/road.service';
import { RoadEntity } from '@root/road/road.entity';

@Module({
  controllers: [RoadController],
  providers: [
    RoadService,
  ],
  imports: [TypeOrmModule.forFeature([RoadEntity])],
  exports: [RoadService]
})


export class RoadModule {}
