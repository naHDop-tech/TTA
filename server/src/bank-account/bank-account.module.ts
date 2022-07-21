import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CardService } from '@root/card/card.service';
import { CardGenerator } from '@root/utils/CardGenerator'
import { CustomerEntity } from '@root/customer/customer.entity'
import { CustomerService } from '@root/customer/customer.service'
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
    CustomerService,
  ],
  imports: [TypeOrmModule.forFeature([BankAccountEntity, CardEntity, CustomerEntity])],
  exports: [BankAccountService, CardService, CardGenerator, CustomerService]
})


export class BankAccountModule {}
