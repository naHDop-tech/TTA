import { ICard } from '@root/utils/CardGenerator'
import { CurrencyTypes } from '@constants/currency.constant'
import { ICustomer } from '@root/customer/interfaces/customer.interface'

export interface IBankAccount {
    cards: ICard[]
    currency: CurrencyTypes
    customer: ICustomer
}