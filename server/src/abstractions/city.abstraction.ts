import { Expose } from 'class-transformer';

import { Weathers } from '@constants/city.constant'
import { WeatherGenerator } from '@root/utils/WeatherGenerator'
import { BranchOffice } from '@abstractions/branch-office.abstract'
// const getPopulation = Math.floor(Math.random() * (7000000 - 5000) + 5000)

export class City {
    readonly id: number
    name: string
    population: number
    branchOffices: BranchOffice

    @Expose()
    get weather(): Weathers {
        const weatherGenerator = new WeatherGenerator()
        return weatherGenerator.getRandomWeather()
    }

    @Expose()
    get isAirportExists(): boolean {
        return this.population > 1000000
    }
}