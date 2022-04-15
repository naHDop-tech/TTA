import {
    Injectable,
    NotFoundException,
    ConflictException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Card } from '@root/card/card.entity'
import { CardTypes, CardPaymentSystems } from '@constants/card.constant'
import { CardGenerator } from '@root/utils/CardGenerator'

@Injectable()
export class CardService {
    constructor(
        @InjectRepository(Card) private readonly cardRepository: Repository<Card>,
        private readonly cardGenerator: CardGenerator
    ) {}

    async create(
        type: CardTypes,
        paymentSystem: CardPaymentSystems,
        cardHolder: string
    ): Promise<Card> {
        const card = this.cardGenerator.generateCard(type, paymentSystem, cardHolder)
        return await this.cardRepository.save(card)
    }

    async findByBankAccountId(bankAccountId: number): Promise<Card> {
        if (!bankAccountId) {
          throw new NotFoundException('Vehicle not found');
        }

        return await this.cardRepository.findOne({ where: { bankAccountId } });
    }
}