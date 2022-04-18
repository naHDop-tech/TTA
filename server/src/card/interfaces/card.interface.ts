import { CardTypes, CardPaymentSystems } from '@constants/card.constant'
import { BankAccount } from '@root/bank-account/bank-account.entity'

export interface ICard {
    type: CardTypes
    paymentSystem: CardPaymentSystems
    number: string
    cvv: number
    cardHolder: string
    expireDate: Date
    bankAccount: BankAccount
}