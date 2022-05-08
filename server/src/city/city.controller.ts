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
import { CityCreateDto } from '@root/city/dtos/create-city.dto';

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

    @Get('/:id')
    @UseInterceptors(ClassSerializerInterceptor)
    getCity(@Param('id') id: number) {
        return this.cityService.findById(id)
    }
}
