import { IUser } from '@root/user/interfaces/user.interface'
import { CurrencyTypes } from '@constants/currency.constant'
import { IBranchOffice } from '@root/branch-office/interfaces/branch-office.interface'

export interface IApplication {
    user: IUser
    description: string
    amount: number
    currency: CurrencyTypes
    destinationOffice: IBranchOffice
}