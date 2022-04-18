import { ICard } from '@root/utils/CardGenerator'
import { CurrencyTypes } from '@constants/currency.constant'
import { IUser } from '@root/user/interfaces/user.interface'

export interface IBankAccount {
    cards: ICard[]
    currency: CurrencyTypes
    user: IUser
}