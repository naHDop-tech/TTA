import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { Vehicle } from '@root/vehicle/vehicle.entity'
import { VehicleModule } from '@root/vehicle/vehicle.module'

import { Card } from '@root/card/card.entity'
import { CardModule } from '@root/card/card.module'

import { User } from '@root/user/user.entity'
import { UserModule } from '@root/user/user.module'

import { BankAccount } from '@root/bank-account/bank-account.entity'
import { BankAccountModule } from '@root/bank-account/bank-account.module'

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
          entities: [Vehicle, Card, User, BankAccount],
          synchronize: true,
        };
      },
    }),
    VehicleModule,
    CardModule,
    UserModule,
    BankAccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
