import {
    Controller,
    Get,
    Post,
    Body,
    Query,
    Param,
    ClassSerializerInterceptor,
    UseInterceptors,
} from '@nestjs/common';

import { BankAccountService } from '@root/bank-account/bank-account.service'
import { CreateBankAccountDto } from '@root/bank-account/dtos/create-bank-account.dto'
import { CreateCardDto } from '@root/card/dtos/create-card.dto'

@Controller('/api/bank-account')
export class BankAccountController {
    constructor(
      private readonly bankAccountService: BankAccountService,
    ) {}

    @Post('/create')
    createBankAccount(@Body() body: CreateBankAccountDto) {
        return this.bankAccountService.create(body)
    }

    @Post('/add-card')
    @UseInterceptors(ClassSerializerInterceptor)
    addCard(
        @Body() body: CreateCardDto,
        @Query() query: { backAccountId: number }
    ) {
        return this.bankAccountService.addCard(query.backAccountId, body)
    }

    @Get('/:id')
    @UseInterceptors(ClassSerializerInterceptor)
    getCardByBankAccountId(@Param('id') id: number) {
        return this.bankAccountService.findById(id)
    }
}