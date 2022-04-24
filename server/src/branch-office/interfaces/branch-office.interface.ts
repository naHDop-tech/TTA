import { IBankAccount } from '@root/bank-account/interfaces/bank-account.interface'
import { IVehicle } from '@root/vehicle/interfaces/vehicle.interface'
import { ICustomer } from '@root/customer/interfaces/customer.interface'
import { IApplication } from '@root/application/interfaces/application.interface'
import { IRoad } from '@root/road/interfaces/road.interface'

export interface IBranchOffice {
    bankAccount: IBankAccount
    vehicles: IVehicle[]
    clients: ICustomer[]
    applications: IApplication[]
    roads: IRoad[]
}