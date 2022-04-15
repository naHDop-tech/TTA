import { BankAccount } from '@abstractions/bank-account.abstract'
import { Vehicle } from '@abstractions/vehicle.abstract'
import { User } from '@abstractions/user.abstract'
import { Road } from '@abstractions/road.abstract'
import { Application } from '@abstractions/applications.abstract'

export abstract class BranchOffice {
    id: number
    bankAccount: BankAccount
    vehicles: Vehicle[]
    clients: User[]
    applications: Application[]
    roads: Road[]
}