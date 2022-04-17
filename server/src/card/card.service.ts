import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Card } from '@root/card/card.entity'
import { CreateCardDto } from '@root/card/dtos/create-card.dto'
import { CardGenerator } from '@root/utils/CardGenerator'

@Injectable()
export class CardService {
    constructor(
        @InjectRepository(Card) private readonly cardRepository: Repository<Card>,
        private readonly cardGenerator: CardGenerator
    ) {}

    async create(
        payload: CreateCardDto
    ): Promise<Card> {
        const { type, paymentSystem, cardHolder, bankAccountId } = payload

        const card = this.cardGenerator.generateCard(type, paymentSystem, cardHolder)
        return await this.cardRepository.save({ ...card, bankAccountId })
    }

    async findByBankAccountId(bankAccountId: number): Promise<Card> {
        if (!bankAccountId) {
          throw new NotFoundException('Card not found');
        }

        return await this.cardRepository.findOne({ where: { bankAccount: { id: bankAccountId } }, relations: ['bankAccount'] });
    }
}