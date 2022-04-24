import { ICustomer } from '@root/customer/interfaces/customer.interface'
import { CurrencyTypes } from '@constants/currency.constant'
import { IBranchOffice } from '@root/branch-office/interfaces/branch-office.interface'

export interface IApplication {
    customer: ICustomer
    description: string
    amount: number
    currency: CurrencyTypes
    destinationOffice: IBranchOffice
}