import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
} from 'typeorm';

import { ICard } from '@root/card/interfaces/card.interface'
import { CardTypes, CardPaymentSystems } from '@constants/card.constant'
import { BankAccount } from '@root/bank-account/bank-account.entity'

@Entity({ name: 'cards'})
export class Card implements ICard {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    type: CardTypes

    @Column({ name: 'payment_system' })
    paymentSystem: CardPaymentSystems

    @Column()
    number: string

    @Column()
    cvv: number

    @Column({ name: 'card_holder' })
    cardHolder: string

    @Column({ name: 'expire_date' })
    expireDate: Date

    @ManyToOne(() => BankAccount, (account) => account.cards)
    bankAccount: BankAccount
}