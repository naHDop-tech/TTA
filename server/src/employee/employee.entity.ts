import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { IEmployee } from '@root/employee/interfaces/employee.interface'
import { RoleTypes } from '@constants/employee.constant'
import { BranchOfficeEntity } from '@root/branch-office/branch-office.entity';

@Entity('employees')
export class EmployeeEntity implements IEmployee {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    firstName: string;

    @Column()
    secondName: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column()
    role: RoleTypes;

    @Column()
    salary: number;

    @Column()
    position: string;

    @Column()
    internalPhone: string;

    @Column()
    branchOffice: BranchOfficeEntity;
}
