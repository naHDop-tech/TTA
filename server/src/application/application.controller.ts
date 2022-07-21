import {
    Body,
    Controller,
    Post,
    Query,
    Get,
    Delete,
    Param,
} from '@nestjs/common';
import { ApplicationCreateDto } from '@root/application/dtos/application-create.dto';

import { ApplicationService } from '@root/application/application.service'

@Controller('/api/application')
export class ApplicationController {
    constructor(
      private readonly applicationService: ApplicationService,
    ) {}

    @Get()
    getAllByBranchOfficeId(@Query() query: { take: number, skip: number }, @Body() branchOfficeId: number) {
        return this.applicationService.findAll(query.take, query.skip, branchOfficeId)
    }
  
    @Post('/create')
    createApplication(@Body() body: ApplicationCreateDto) {
        return this.applicationService.create(body)
    }

    @Delete('/:id')
    getApplication(@Param('id') id: number) {
        return this.applicationService.removeById(id)
    }
}
