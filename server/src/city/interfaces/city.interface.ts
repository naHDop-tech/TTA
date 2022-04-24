import { Weathers } from '@constants/city.constant'
import { BranchOffice } from '@abstractions/branch-office.abstract'

export interface ICity {
    name: string
    population: number
    branchOffices: BranchOffice[]
    weather(): Weathers
    isAirportExists(): boolean
}

