import { CardTypes, CardPaymentSystems } from '@constants/card.constant'

export abstract class Card {
    id: number
    type: CardTypes
    paymentSystem: CardPaymentSystems
    number: string
    cvv: number
    cardHolder: string
    expireDate: Date
}