import {
    Injectable,
    NotFoundException,
    Inject,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { BankAccount } from '@root/bank-account/bank-account.entity'
import { CreateBankAccountDto } from '@root/bank-account/dtos/create-bank-account.dto'
import { CreateCardDto } from '@root/card/dtos/create-card.dto'
import { CardService } from '@root/card/card.service'


@Injectable()
export class BankAccountService {
    constructor(
        @InjectRepository(BankAccount) private readonly bankAccountRepository: Repository<BankAccount>,
        private readonly cardService: CardService,
    ) {}

    async create(
        payload: CreateBankAccountDto
    ): Promise<BankAccount> {
        const user = {
            name: payload.userName,
            age: payload.userAge,
            email: payload.userEmail,
            type: payload.userType
        }
        const account = {
            currency: payload.currency,
            user,
        }
        return await this.bankAccountRepository.save(account)
    }

    async addCard(
        payload: CreateCardDto
    ): Promise<BankAccount> {
        const { bankAccountId, type, paymentSystem, cardHolder } = payload
        const bankAccount = await this.bankAccountRepository.findOne({ where: { id: bankAccountId }})

        if(!bankAccount) {
            throw new NotFoundException('Bank account not found');
        }

        const card = await this.cardService.create({
            type,
            paymentSystem,
            cardHolder,
            bankAccountId,
        })

        await bankAccount.addCard(card)

        return this.bankAccountRepository.save(bankAccount)
    }

    async findById(id: number): Promise<BankAccount> {
        if (!id) {
          throw new NotFoundException('Bank account not found');
        }

        return await this.bankAccountRepository.findOne({ where: { id } });
    }
}