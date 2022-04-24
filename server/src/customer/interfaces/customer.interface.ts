import { UserTypes } from '@root/constants/customer.constant'
import { IBankAccount } from '@root/bank-account/interfaces/bank-account.interface'
import { IUser } from '@root/user/interfaces/user.interface'

export interface ICustomer extends IUser {
    type: UserTypes;
    bankAccounts: IBankAccount[]
}