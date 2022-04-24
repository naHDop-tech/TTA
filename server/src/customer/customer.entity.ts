import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany
} from 'typeorm';

import { ICustomer } from '@root/customer/interfaces/customer.interface'
import { UserTypes } from '@root/constants/customer.constant'
import { BankAccountEntity } from '@root/bank-account/bank-account.entity'

@Entity('customers')
export class CustomerEntity implements ICustomer {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    firstName: string;

    @Column()
    secondName: string;

    @Column()
    age: number;

    @Column()
    email: string

    @Column()
    type: UserTypes;

    @OneToMany(
        () => BankAccountEntity,
        (account) => account.customer,
        { cascade: ["remove"] }
    )
    bankAccounts: Array<BankAccountEntity>
}