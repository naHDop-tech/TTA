import {
    Body,
    Controller,
    Post,
    Query,
    Get,
    Put,
    Delete,
    Param,
} from '@nestjs/common';

import { CreateRoadDto } from '@root/road/dtos/create-road.dto'
import { UpdateRoadDto } from '@root/road/dtos/update-road.dto'

import { RoadService } from '@root/road/road.service'

@Controller('/api/road')
export class RoadController {
    constructor(
      private readonly roadService: RoadService,
    ) {}

    @Get()
    getAll(@Query() query: { take: number, skip: number }) {
        return this.roadService.findAll(query.take, query.skip)
    }

    @Get('/:id')
    getRoadById(@Param('id') id: number) {
        return this.roadService.findById(id)
    }

    @Post('/create')
    createRoad(@Body() body: CreateRoadDto) {
        return this.roadService.create(body)
    }

    @Put('/:id')
    updateById(@Param('id') id: number, @Body() body: UpdateRoadDto) {
        return this.roadService.updateById(id, body)
    }

    @Delete('/:id')
    deleteById(@Param('id') id: number) {
        return this.roadService.removeById(id)
    }
}
