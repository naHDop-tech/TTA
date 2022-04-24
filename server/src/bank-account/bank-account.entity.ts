import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';

import { IBankAccount } from '@root/bank-account/interfaces/bank-account.interface'
import { CardEntity } from '@root/card/card.entity'
import { CustomerEntity } from '@root/customer/customer.entity'
import { CurrencyTypes } from '@constants/currency.constant'

@Entity({ name: 'bank_accounts'})
export class BankAccountEntity implements IBankAccount {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @OneToMany (
        () => CardEntity,
        card => card.bankAccount,
        {
            nullable: true,
            cascade: ["remove", "update"]
        }
    )
    cards: Array<CardEntity>

    @Column()
    currency: CurrencyTypes;

    @ManyToOne(() => CustomerEntity, (user) => user.bankAccounts)
    customer: CustomerEntity
}
