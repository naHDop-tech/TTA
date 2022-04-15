import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { Vehicle } from '@root/vehicle/vehicle.entity'
import { Card } from '@root/card/card.entity'
import { VehicleModule } from '@root/vehicle/vehicle.module'
import { CardModule } from '@root/card/card.module'
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
          entities: [Vehicle, Card],
          synchronize: true,
        };
      },
    }),
    VehicleModule,
    CardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
