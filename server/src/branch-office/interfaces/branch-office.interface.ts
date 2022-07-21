import { IBankAccount } from '@root/bank-account/interfaces/bank-account.interface'
import { IVehicle } from '@root/vehicle/interfaces/vehicle.interface'
import { ICustomer } from '@root/customer/interfaces/customer.interface'
import { IApplication } from '@root/application/interfaces/application.interface'
import { IEmployee } from '@root/employee/interfaces/employee.interface'
import { ICity } from '@root/city/interfaces/city.interface'

export interface IBranchOffice {
    name: string
    bankAccount: IBankAccount
    vehicles: IVehicle[]
    clients: ICustomer[]
    employees: IEmployee[]
    applications: IApplication[]
    city: ICity
}