import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerController } from '@root/customer/customer.controller';
import { CustomerService  } from '@root/customer/customer.service';
import { CustomerEntity } from '@root/customer/customer.entity';

@Module({
  controllers: [CustomerController],
  providers: [
    CustomerService,
  ],
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  exports: [CustomerService]
})


export class CustomerModule {}
