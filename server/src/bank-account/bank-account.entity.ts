import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';

import { BankAccount as AbstractionBankAccount } from '@abstractions/bank-account.abstract'
import { Card } from '@root/card/card.entity'
import { User } from '@root/user/user.entity'
import { CurrencyTypes } from '@constants/currency.constant'

@Entity({ name: 'bank_account'})
export class BankAccount {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @OneToMany (() => Card, card => card.bankAccount, { nullable: true })
    cards: Card[]

    @Column()
    currency: CurrencyTypes;

    @ManyToOne(() => User, (user) => user.bankAccounts)
    user: User
}
