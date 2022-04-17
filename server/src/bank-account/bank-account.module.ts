import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CardService } from '@root/card/card.service';
import { CardGenerator } from '@root/utils/CardGenerator'
import { User } from '@root/user/user.entity'
import { UserService } from '@root/user/user.service'
import { BankAccountController } from '@root/bank-account/bank-account.controller'
import { BankAccountService } from '@root/bank-account/bank-account.service'
import { BankAccount } from '@root/bank-account/bank-account.entity'
import { Card } from '@root/card/card.entity';

@Module({
  controllers: [BankAccountController],
  providers: [
    BankAccountService,
    CardService,
    CardGenerator,
    UserService,
  ],
  imports: [TypeOrmModule.forFeature([BankAccount, Card, User])],
  exports: [BankAccountService, CardService, CardGenerator, UserService]
})


export class BankAccountModule {}
