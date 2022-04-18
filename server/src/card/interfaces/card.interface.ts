import { CardTypes, CardPaymentSystems } from '@constants/card.constant'
import { IBankAccount } from '@root/bank-account/interfaces/bank-account.interface'

export interface ICard {
    type: CardTypes
    paymentSystem: CardPaymentSystems
    number: string
    cvv: number
    cardHolder: string
    expireDate: Date
    bankAccount: IBankAccount
}