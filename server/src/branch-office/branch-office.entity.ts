import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { IBranchOffice } from '@root/branch-office/interfaces/branch-office.interface'
import { BankAccountEntity } from '@root/bank-account/bank-account.entity'
import { VehicleEntity } from '@root/vehicle/vehicle.entity'
import { CustomerEntity } from '@root/customer/customer.entity'
import { EmployeeEntity } from '@root/employee/employee.entity'

import { IApplication } from '@root/application/interfaces/application.interface'
import { ICity } from '@root/city/interfaces/city.interface'


@Entity('branch_office')
export class BranchOfficeEntity implements IBranchOffice {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    bankAccount: BankAccountEntity

    @Column()
    vehicles: VehicleEntity[]

    @Column()
    clients: CustomerEntity[]

    @Column()
    employees: EmployeeEntity[]

    @Column()
    applications: IApplication[]

    @Column()
    city: ICity
}
