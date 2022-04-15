import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { VehicleTypes } from '@root/constants/vehicle.constant'
import { Vehicle as AbstractVehicle } from '@root/abstractions/vehicle.abstract'


@Entity('vehicles')
export class Vehicle extends AbstractVehicle {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    type: VehicleTypes

    @Column()
    model: string;

    @Column()
    price: number;

    @Column()
    currency: string

    @Column()
    year: Date;

    @Column()
    mileage: number

    @Column()
    carrying: number

    @Column()
    countryNumber: string

    @Column({ default: 0 })
    repairCondition: number

    @Column({ default: false })
    isChecked: boolean
}
