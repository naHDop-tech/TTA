import { VehicleTypes } from '@root/constants/vehicle.constant'
import { RepairCost } from '@root/utils/RepairCost'
import { Expose } from 'class-transformer';

export abstract class Vehicle {
    readonly id: number
    readonly type: VehicleTypes
    readonly model: string
    readonly price: number
    readonly currency: string
    readonly year: Date

    countryNumber: string
    mileage: number
    carrying: number
    repairCondition: number
    isChecked: boolean

    @Expose()
    get isReadyToRace(): boolean {
        return this.isChecked
    }

    @Expose()
    get repairCost(): number {
        const repairCoast = new RepairCost(this)
        return repairCoast.currentRepairPrice
    }
}