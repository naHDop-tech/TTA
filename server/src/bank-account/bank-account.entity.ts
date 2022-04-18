import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';

import { IBankAccount } from '@root/bank-account/interfaces/bank-account.interface'
import { Card } from '@root/card/card.entity'
import { User } from '@root/user/user.entity'
import { CurrencyTypes } from '@constants/currency.constant'

@Entity({ name: 'bank_account'})
export class BankAccount implements IBankAccount {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @OneToMany (() => Card, card => card.bankAccount, { nullable: true })
    cards: Card[]

    @Column()
    currency: CurrencyTypes;

    @ManyToOne(() => User, (user) => user.bankAccounts)
    user: User
}
