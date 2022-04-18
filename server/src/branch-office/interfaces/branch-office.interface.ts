import { IBankAccount } from '@root/bank-account/interfaces/bank-account.interface'
import { IVehicle } from '@root/vehicle/interfaces/vehicle.interface'
import { IUser } from '@root/user/interfaces/user.interface'
import { IApplication } from '@root/application/interfaces/application.interface'
import { IRoad } from '@root/road/interfaces/road.interface'

export interface IBranchOffice {
    id: number
    bankAccount: IBankAccount
    vehicles: IVehicle[]
    clients: IUser[]
    applications: IApplication[]
    roads: IRoad[]
}