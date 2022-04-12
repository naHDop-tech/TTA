import { Expose } from 'class-transformer';

import { Weathers } from '@constants/city.constant'
import { WeatherGenerator } from '@root/utils/WeatherGenerator'

export class City {
    name: string
    population: number


    @Expose()
    get weather(): Weathers {
        const weatherGenerator = new WeatherGenerator()
        return weatherGenerator.getRandomWeather()
    }
}