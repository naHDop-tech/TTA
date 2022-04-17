import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany
} from 'typeorm';

import { User as AbstractionUser } from '@abstractions/user.abstract'
import { UserTypes } from '@constants/user.constant'
import { BankAccount } from '@root/bank-account/bank-account.entity'

@Entity('users')
export class User {
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

    @OneToMany(() => BankAccount, (account) => account.user)
    bankAccounts: BankAccount[]
}