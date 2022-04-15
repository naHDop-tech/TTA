import { User } from '@abstractions/user.abstract'
import { CurrencyTypes } from '@constants/currency.constant'
import { BranchOffice } from '@abstractions/branch-office.abstract'

export abstract class Application {
    id: number
    user: User
    description: string
    amount: number
    currency: CurrencyTypes
    destination: BranchOffice
}