import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApplicationController } from '@root/application/application.controller';
import { ApplicationService  } from '@root/application/application.service';
import { CustomerService } from '@root/customer/customer.service'
import { ApplicationEntity } from '@root/application/application.entity';

@Module({
  controllers: [ApplicationController],
  providers: [
    ApplicationService,
    CustomerService
  ],
  imports: [TypeOrmModule.forFeature([ApplicationEntity])],
  exports: [ApplicationService, CustomerService]
})


export class ApplicationModule {}
