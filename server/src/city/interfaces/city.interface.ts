import { Weathers } from '@constants/city.constant'
import { WeatherGenerator } from '@root/utils/WeatherGenerator'
import { BranchOffice } from '@abstractions/branch-office.abstract'

export interface ICity {
    name: string
    population: number
    branchOffices: BranchOffice[]
    weather(): Weathers
    isAirportExists(): boolean
}

