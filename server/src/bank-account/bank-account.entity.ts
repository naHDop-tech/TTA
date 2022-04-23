import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';

import { IBankAccount } from '@root/bank-account/interfaces/bank-account.interface'
import { CardEntity } from '@root/card/card.entity'
import { UserEntity } from '@root/user/user.entity'
import { CurrencyTypes } from '@constants/currency.constant'

@Entity({ name: 'bank_account'})
export class BankAccountEntity implements IBankAccount {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @OneToMany (
        () => CardEntity,
        card => card.bankAccount,
        {
            nullable: true,
            cascade: ["remove"]
        }
    )
    cards: Array<CardEntity>

    @Column()
    currency: CurrencyTypes;

    @ManyToOne(() => UserEntity, (user) => user.bankAccounts)
    user: UserEntity
}
