import {
    Body,
    Controller,
    Post,
    Patch,
    Query,
    Get,
    Param,
    ClassSerializerInterceptor,
    UseInterceptors,
} from '@nestjs/common';
import { CityCreateDto } from '@root/city/dtos/create-city.dto';
import { AddExistsBranchOfficeDto } from '@root/city/dtos/add-exists-branch-office.dto';
import { AddExistsRoadDto } from '@root/city/dtos/add-exists.road.dto'

import { CityService } from '@root/city/city.service'

@Controller('/api/city')
export class CityController {
    constructor(
      private readonly cityService: CityService,
    ) {}

    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    getAll(@Query() query: { take: number, skip: number }) {
        return this.cityService.findAll(query.take, query.skip)
    }
  
    @Post('/create')
    createCity(@Body() body: CityCreateDto) {
        return this.cityService.create(body)
    }

    @Patch('/add-exists-branch-office')
    addBranchOffice(@Body() body: AddExistsBranchOfficeDto) {
        return this.cityService.addExistsBranchOffice(body)
    }

    @Patch('/add-exists-road')
    addRoad(@Body() body: AddExistsRoadDto) {
        return this.cityService.addExistsRoad(body)
    }

    @Get('/:id')
    @UseInterceptors(ClassSerializerInterceptor)
    getCity(@Param('id') id: number) {
        return this.cityService.findById(id)
    }
}
