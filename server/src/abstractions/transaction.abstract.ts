import { User } from '@abstractions/user.abstract'
import { TransactionStatuses } from '@constants/transaction.constant'
import { BankAccount } from '@abstractions/bank-account.abstract'

export abstract class Transaction {
    id: number
    user: User
    date: Date
    amount: number
    status: TransactionStatuses
    fromBankAccount: BankAccount
    toBankAccount: BankAccount

    makeTransaction: void
}