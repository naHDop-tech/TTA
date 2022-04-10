import { User } from '@abstractions/user.abstract'
import { TransactionStatuses } from '@constants/transaction.constant'

export abstract class Transaction {
    user: User
    date: Date
    amount: number
    status: TransactionStatuses
}