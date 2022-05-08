import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';

import { IBankAccount } from '@root/bank-account/interfaces/bank-account.interface'
import { CardEntity } from '@root/card/card.entity'
import { BranchOfficeEntity } from '@root/branch-office/branch-office.entity'
import { CustomerEntity } from '@root/customer/customer.entity'
import { CurrencyTypes } from '@constants/currency.constant'

@Entity({ name: 'bank_accounts'})
export class BankAccountEntity implements IBankAccount {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    currency: CurrencyTypes;

    @OneToMany (
        () => CardEntity,
        card => card.bankAccount,
        {
            nullable: true,
            eager: true,
            // cascade: ["remove", "update"]
        }
    )
    cards: Array<CardEntity>

    @ManyToOne(() => CustomerEntity, (customer) => customer.bankAccounts, { eager: true })
    customer: CustomerEntity

    @OneToOne(
        () => BranchOfficeEntity,
        (office) => office.bankAccount,
        { eager: true }
    )
    branchOffice: BranchOfficeEntity
}
