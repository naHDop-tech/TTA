import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany
} from 'typeorm';

import { IUser } from '@root/user/interfaces/user.interface'
import { UserTypes } from '@constants/user.constant'
import { BankAccountEntity } from '@root/bank-account/bank-account.entity'

@Entity('users')
export class UserEntity implements IUser {
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

    @OneToMany(() => BankAccountEntity, (account) => account.user)
    bankAccounts: BankAccountEntity[]
}