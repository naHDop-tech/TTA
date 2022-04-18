import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CardService } from '@root/card/card.service';
import { CardGenerator } from '@root/utils/CardGenerator'
import { UserEntity } from '@root/user/user.entity'
import { UserService } from '@root/user/user.service'
import { BankAccountController } from '@root/bank-account/bank-account.controller'
import { BankAccountService } from '@root/bank-account/bank-account.service'
import { BankAccountEntity } from '@root/bank-account/bank-account.entity'
import { CardEntity } from '@root/card/card.entity';

@Module({
  controllers: [BankAccountController],
  providers: [
    BankAccountService,
    CardService,
    CardGenerator,
    UserService,
  ],
  imports: [TypeOrmModule.forFeature([BankAccountEntity, CardEntity, UserEntity])],
  exports: [BankAccountService, CardService, CardGenerator, UserService]
})


export class BankAccountModule {}
