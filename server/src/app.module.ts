import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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

import { ApplicationEntity } from '@root/application/application.entity'
import { ApplicationModule } from '@root/application/application.module'

import { CityEntity } from '@root/city/city.entity'
import { CityModule } from '@root/city/city.module'

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
            EmployeeEntity,
            ApplicationEntity,
            CityEntity,
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
    ApplicationModule,
    CityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
