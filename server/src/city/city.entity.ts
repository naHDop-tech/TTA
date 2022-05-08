import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn
} from 'typeorm';
import { Expose } from 'class-transformer';

import { ICity } from '@root/city/interfaces/city.interface'

import { Weathers } from '@constants/city.constant'
import { WeatherGenerator } from '@root/utils/WeatherGenerator'

import { BranchOfficeEntity } from '@root/branch-office/branch-office.entity';
import { RoadEntity } from '@root/road/road.entity';


@Entity('cites')
export class CityEntity implements ICity {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    name: string;

    @Column()
    population: number;

    @OneToMany(
        () => BranchOfficeEntity,
        (office) => office.city,
        { eager: true }
    )
    branchOffices: BranchOfficeEntity[];

    @OneToMany(
        () => RoadEntity,
        (road) => road,
        { eager: true }
    )
    roads: RoadEntity[];

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
