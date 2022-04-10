import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { Vehicle } from '@root/vehicles/vehicle.entity'
import { VehicleModule } from '@root/vehicles/vehicle.module'
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
          entities: [Vehicle],
          synchronize: true,
        };
      },
    }),
    VehicleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
