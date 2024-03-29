import { UserTypes } from '@constants/user.constant'
import { IBankAccount } from '@root/bank-account/interfaces/bank-account.interface'

export interface IUser {
    id: number
    firstName: string;
    secondName: string;
    age: number;
    email: string
    type: UserTypes;
    bankAccounts: IBankAccount[]
}