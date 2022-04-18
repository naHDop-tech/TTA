import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany
} from 'typeorm';

import { IUser } from '@root/user/interfaces/user.interface'
import { UserTypes } from '@constants/user.constant'
import { BankAccount } from '@root/bank-account/bank-account.entity'

@Entity('users')
export class User implements IUser {
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