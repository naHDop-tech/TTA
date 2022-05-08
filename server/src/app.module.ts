import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { VehicleEntity } from '@root/vehicle/vehicle.entity'
import { VehicleModule } from '@root/vehicle/vehicle.module'

import { CardEntity } from '@root/card/card.entity'
import { CardModule } from '@root/card/card.module'

import { CustomerEntity } from '@root/customer/customer.entity'
import { CustomerModule } from '@root/customer/customer.module'

import { BankAccountEntity } from '@root/bank-account/bank-account.entity'
import { BankAccountModule } from '@root/bank-account/bank-account.module'

import { RoadEntity } from '@root/road/road.entity'
import { RoadModule } from '@root/road/road.module'

import { EmployeeEntity } from '@root/employee/employee.entity'
import { EmployeeModule } from '@root/employee/employee.module'

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: config.get<string>('DB_NAME'),
          entities: [
            VehicleEntity,
            CardEntity,
            CustomerEntity,
            BankAccountEntity,
            RoadEntity,
            EmployeeEntity
          ],
          synchronize: true,
        };
      },
    }),
    VehicleModule,
    CardModule,
    CustomerModule,
    BankAccountModule,
    RoadModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
