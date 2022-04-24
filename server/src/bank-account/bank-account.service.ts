import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PropNotProvided } from '@root/decorators/props-not-provided.decorator'

import { BankAccountEntity } from '@root/bank-account/bank-account.entity'

import { CreateBankAccountDto } from '@root/bank-account/dtos/create-bank-account.dto'
import { CreateCardDto } from '@root/card/dtos/create-card.dto'
import { CardService } from '@root/card/card.service'
import { CustomerService } from '@root/customer/customer.service'
import { CustomerEntity } from '@root/customer/customer.entity'


@Injectable()
export class BankAccountService {
    constructor(
        @InjectRepository(BankAccountEntity) private readonly bankAccountRepository: Repository<BankAccountEntity>,
        private readonly cardService: CardService,
        private readonly customerService: CustomerService,
    ) {}

    async create(
        payload: CreateBankAccountDto
    ): Promise<BankAccountEntity> {
        const {
            customerAge,
            customerEmail,
            customerFirstName,
            customerSecondName,
            customerType,
            currency,
        } = payload
        const account = this.bankAccountRepository.create({
            currency
        })

        const savedBankAccount = await this.bankAccountRepository.save(account)

        const customer = new CustomerEntity()
        customer.age = customerAge
        customer.email = customerEmail
        customer.firstName = customerFirstName
        customer.secondName = customerSecondName
        customer.type = customerType
        customer.bankAccounts = [savedBankAccount]

        await this.customerService.create(customer)
        return savedBankAccount
    }

    @PropNotProvided('BankAccountId')
    async addCard(
        bankAccountId: number,
        payload: CreateCardDto
    ): Promise<BankAccountEntity> {
        const { type, paymentSystem } = payload
        const bankAccount = await this.bankAccountRepository.findOne({ where: { id: bankAccountId }, relations: ['customer']})

        if(!bankAccount) {
            throw new NotFoundException('Bank account not found');
        }

        const card = await this.cardService.create({
            type,
            paymentSystem,
            cardHolder: `${bankAccount.customer.firstName} ${bankAccount.customer.secondName}`,
            bankAccountId: bankAccount.id,
        })

        if (bankAccount.cards) {
            bankAccount.cards.push(card)
        } else {
            bankAccount.cards = [card]
        }

        return this.bankAccountRepository.save(bankAccount)
    }

    @PropNotProvided('Id')
    async findById(id: number): Promise<BankAccountEntity> {
        return await this.bankAccountRepository.findOne({ where: { id }, relations: ['customer', 'cards'] });
    }
}
