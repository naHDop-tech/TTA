import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { Card as AbstractionCard } from '@abstractions/card.abstraction'
import { CardTypes, CardPaymentSystems } from '@constants/card.constant'

@Entity('cards')
export class Card extends AbstractionCard {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({ name: 'bank_account_id'})
    bankAccountId: number

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
}