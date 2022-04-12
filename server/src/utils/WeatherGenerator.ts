import {
    Weathers,
    GOOD_WEATHER,
    NORMAL_WEATHER,
    FOGGY_WEATHER,
    STORM_WEATHER,
    RAINING_WEATHER
} from '@constants/city.constant'

interface IObject {
    [key: number]: Weathers
}

export class WeatherGenerator {
    private weatherMap: IObject

    constructor() {
        this.weatherMap = {
            0: GOOD_WEATHER,
            1: NORMAL_WEATHER,
            2: FOGGY_WEATHER,
            3: STORM_WEATHER,
            4: RAINING_WEATHER,
        }
    }

    private get randomWeatherMapKey(): number {
        return Math.floor(Math.random() * (5 - 0) + 0);
    }

    getRandomWeather(): Weathers {
        const key = this.randomWeatherMapKey
        return this.weatherMap[key]
    }
}