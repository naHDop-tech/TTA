import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CardService } from '@root/card/card.service';

import { BankAccountController } from '@root/bank-account/bank-account.controller'
import { BankAccountService } from '@root/bank-account/bank-account.service'
import { BankAccount } from '@root/bank-account/bank-account.entity'

@Module({
  controllers: [BankAccountController],
  providers: [
    BankAccountService,
    CardService,
  ],
  imports: [TypeOrmModule.forFeature([BankAccount])],
})


export class BankAccountModule {}
