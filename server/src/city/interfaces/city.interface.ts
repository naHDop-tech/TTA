import { Weathers } from '@constants/city.constant'
import { IRoad } from '@root/road/interfaces/road.interface'
import { BranchOffice } from '@abstractions/branch-office.abstract'

export interface ICity {
    name: string
    population: number
    branchOffices: BranchOffice[]
    roads: IRoad[]
    weather(): Weathers
    isAirportExists(): boolean
}

