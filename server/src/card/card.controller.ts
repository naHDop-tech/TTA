import {
    Controller,
    Get,
    Param,
    ClassSerializerInterceptor,
    UseInterceptors,
} from '@nestjs/common';

import { CardService } from '@root/card/card.service'

@Controller('/api/card')
export class CardController {
    constructor(
      private readonly cardService: CardService,
    ) {}

    @Get('/:id')
    @UseInterceptors(ClassSerializerInterceptor)
    getCardByBankAccountId(@Param('id') id: number) {
        return this.cardService.findByBankAccountId(id)
    }
}