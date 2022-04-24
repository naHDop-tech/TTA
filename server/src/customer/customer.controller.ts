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

import { CreateCustomerDto } from '@root/customer/dtos/create-customer.dto';

import { CustomerService } from '@root/customer/customer.service'

@Controller('/api/customer')
export class CustomerController {
    constructor(
      private readonly customerService: CustomerService,
    ) {}

    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    getAll(@Query() query: { take: number, skip: number }) {
        return this.customerService.findAll(query.take, query.skip)
    }
  
    @Post('/create')
    createUser(@Body() body: CreateCustomerDto) {
        return this.customerService.create(body)
    }

    @Get('/:id')
    @UseInterceptors(ClassSerializerInterceptor)
    getUser(@Param('id') id: number) {
        return this.customerService.findById(id)
    }
}
