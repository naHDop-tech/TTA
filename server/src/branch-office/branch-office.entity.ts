import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    OneToMany,
    ManyToOne,
} from 'typeorm';

import { IBranchOffice } from '@root/branch-office/interfaces/branch-office.interface'

import { BankAccountEntity } from '@root/bank-account/bank-account.entity'
import { VehicleEntity } from '@root/vehicle/vehicle.entity'
import { CustomerEntity } from '@root/customer/customer.entity'
import { EmployeeEntity } from '@root/employee/employee.entity'
import { ApplicationEntity } from '@root/application/application.entity'
import { CityEntity } from '@root/city/city.entity'


@Entity('branch_offices')
export class BranchOfficeEntity implements IBranchOffice {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    name: string;

    @OneToOne(
        () => BankAccountEntity,
        (account) => account.branchOffice,
        { eager: true }
    )
    bankAccount: BankAccountEntity

    @OneToMany(
        () => VehicleEntity,
        (vehicle) => vehicle.branchOffice,
        { eager: true }
    )
    vehicles: VehicleEntity[]

    @OneToMany(
        () => CustomerEntity,
        (client) => client,
        { eager: true }
    )
    clients: CustomerEntity[]

    @OneToMany(
        () => EmployeeEntity,
        (employee) => employee,
        { eager: true }
    )
    employees: EmployeeEntity[]

    @OneToMany(
        () => ApplicationEntity,
        (application) => application.destinationOffice,
        { eager: true }
    )
    applications: ApplicationEntity[]

    @ManyToOne(
        () => CityEntity,
        (city) => city.branchOffices,
    )
    city: CityEntity
}
