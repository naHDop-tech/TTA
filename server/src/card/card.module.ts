import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CardService  } from '@root/card/card.service';
import { CardGenerator } from '@root/utils/CardGenerator'
import { CardController } from '@root/card/card.controller'
import { Card } from '@root/card/card.entity';

@Module({
  controllers: [CardController],
  providers: [
    CardService,
    CardGenerator
  ],
  imports: [TypeOrmModule.forFeature([Card])],
})


export class CardModule {}
