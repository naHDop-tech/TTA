import {
    Body,
    Controller,
    Post,
    Query,
    Get,
    Param,
} from '@nestjs/common';
import { CreateEmployeeDto } from '@root/employee/dtos/create-employee.dto';

import { EmployeeService } from '@root/employee/employee.service'

@Controller('/api/employee')
export class EmployeeController {
    constructor(
      private readonly employeeService: EmployeeService,
    ) {}

    @Get()
    getAllByBranchOfficeId(@Query() query: { take: number, skip: number }, @Body() branchOfficeId: number) {
        return this.employeeService.findAll(query.take, query.skip, branchOfficeId)
    }
  
    @Post('/create')
    createEmployee(@Body() body: CreateEmployeeDto) {
        return this.employeeService.create(body)
    }

    @Get('/:id')
    getEmployee(@Param('id') id: number) {
        return this.employeeService.findById(id)
    }
}
