import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    OneToOne
} from 'typeorm';

import { BankAccount as AbstractionBankAccount } from '@abstractions/bank-account.abstract'
import { Card } from '@root/card/card.entity'
import { User } from '@root/user/user.entity'
import { CurrencyTypes } from '@constants/currency.constant'

@Entity('banks')
export class BankAccount extends AbstractionBankAccount {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @OneToMany(() => Card, (card) => card)
    cards: Card[]

    @Column()
    currency: CurrencyTypes;

    @OneToOne(() => User, (user) => user)
    user: User
}