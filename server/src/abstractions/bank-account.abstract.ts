import { User } from '@abstractions/user.abstract'
import { Card } from '@abstractions/card.abstraction'
import { CurrencyTypes } from '@constants/currency.constant'

export abstract class BankAccount {
    id: number
    user: User
    cards: Card[]
    currency: CurrencyTypes


    addCard(card: Card): void {
        this.cards.push(card)
    }
}