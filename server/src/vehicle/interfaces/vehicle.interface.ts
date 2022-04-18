import { VehicleTypes } from '@root/constants/vehicle.constant'

export interface IVehicle {
    id: number
    type: VehicleTypes
    model: string
    price: number
    currency: string
    year: Date
    countryNumber: string
    mileage: number
    carrying: number
    repairCondition: number
    isChecked: boolean
    isReadyToRace: boolean
    repairCost: number
}