import { VehicleTypes } from '@root/constants/vehicle.constant'
import { RepairCost } from '@root/utils/RepairCost'
import { Expose } from 'class-transformer';

export abstract class Vehicle {
    readonly type: VehicleTypes
    readonly id: number
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