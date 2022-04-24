import { RoleTypes } from '@constants/employee.constant'
import { IUser } from '@root/user/interfaces/user.interface'
import { IBranchOffice } from '@root/branch-office/interfaces/branch-office.interface'

export interface IEmployee extends IUser {
    role: RoleTypes
    salary: number
    position: string
    internalPhone: string
    branchOffice: IBranchOffice
}