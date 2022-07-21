import { Weathers } from '@constants/city.constant'
import { IRoad } from '@root/road/interfaces/road.interface'
import { IBranchOffice } from '@root/branch-office/interfaces/branch-office.interface'

export interface ICity {
    name: string
    population: number
    branchOffices: IBranchOffice[]
    roads: IRoad[]
    weather: Weathers
    isAirportExists: boolean
}

