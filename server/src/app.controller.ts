import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CardGenerator } from '@root/utils/CardGenerator'
import { CREDIT_CARD, VISA } from '@constants/card.constant'

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('card')
  getCard() {
    const cardGenerator = new CardGenerator()

    return cardGenerator.generateCard(CREDIT_CARD, VISA)
  }
}
