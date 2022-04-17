import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { BankAccount } from '@root/bank-account/bank-account.entity'

import { CreateBankAccountDto } from '@root/bank-account/dtos/create-bank-account.dto'
import { CreateCardDto } from '@root/card/dtos/create-card.dto'
import { CardService } from '@root/card/card.service'
import { UserService } from '@root/user/user.service'
import { User } from '@root/user/user.entity'


@Injectable()
export class BankAccountService {
    constructor(
        @InjectRepository(BankAccount) private readonly bankAccountRepository: Repository<BankAccount>,
        private readonly cardService: CardService,
        private readonly userService: UserService,
    ) {}

    async create(
        payload: CreateBankAccountDto
    ): Promise<BankAccount> {
        const {
            userAge,
            userEmail,
            userFirstName,
            userSecondName,
            userType,
            currency,
        } = payload

        const account = this.bankAccountRepository.create({
            currency
        })

        const savedBankAccount = await this.bankAccountRepository.save(account)

        // prepare user
        const user = new User()
        user.age = userAge
        user.email = userEmail
        user.firstName = userFirstName
        user.secondName = userSecondName
        user.type = userType
        user.bankAccounts = [savedBankAccount]

        await this.userService.create(user)
        return savedBankAccount
    }

    async addCard(
        bankAccountId: number,
        payload: CreateCardDto
    ): Promise<BankAccount> {
        const { type, paymentSystem } = payload
        const bankAccount = await this.bankAccountRepository.findOne({ where: { id: bankAccountId }, relations: ['user']})

        if(!bankAccount) {
            throw new NotFoundException('Bank account not found');
        }

        const card = await this.cardService.create({
            type,
            paymentSystem,
            cardHolder: `${bankAccount.user.firstName} ${bankAccount.user.secondName}`,
            bankAccountId: bankAccount.id,
        })

        if (bankAccount.cards) {
            bankAccount.cards.push(card)
        } else {
            bankAccount.cards = [card]
        }

        return this.bankAccountRepository.save(bankAccount)
    }

    async findById(id: number): Promise<BankAccount> {
        if (!id) {
          throw new NotFoundException('Bank account not found');
        }

        return await this.bankAccountRepository.findOne({ where: { id }, relations: ['user', 'cards'] });
    }
}