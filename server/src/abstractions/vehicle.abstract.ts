import { VehicleTypes } from '@root/constants/vehicle.constant'
import { RepairCost } from '@models/utils/RepairCost'

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

    get isReadyToRace(): boolean {
        return this.isChecked
    }

    get repairCost(): number {
        const repairCoast = new RepairCost(this)
        return repairCoast.currentRepairPrice
    }
}