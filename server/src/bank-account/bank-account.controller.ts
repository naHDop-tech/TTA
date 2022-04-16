import {
    Controller,
    Get,
    Post,
    Body,
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

    @Get('/add-card')
    @UseInterceptors(ClassSerializerInterceptor)
    addCard(@Body() body: CreateCardDto) {
        return this.bankAccountService.addCard(body)
    }
}