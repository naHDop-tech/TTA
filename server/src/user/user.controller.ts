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
import { CreateUserDto } from '@root/user/dtos/create-user.dto';

import { UserService } from '@root/user/user.service'

@Controller('/api/user')
export class UserController {
    constructor(
      private readonly userService: UserService,
    ) {}

    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    getAll(@Query() query: { take: number, skip: number }) {
        return this.userService.findAll(query.take, query.skip)
    }
  
    @Post('/create')
    createUser(@Body() body: CreateUserDto) {
        return this.userService.create(body)
    }

    @Get('/:id')
    @UseInterceptors(ClassSerializerInterceptor)
    getUser(@Param('id') id: number) {
        return this.userService.findById(id)
    }
}
