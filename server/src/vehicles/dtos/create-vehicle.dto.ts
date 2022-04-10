import { IsString, MinLength, MaxLength, IsEmail, IsNumber, IsDate, isString } from 'class-validator';

import { VehicleTypes } from '@constants/vehicle.constant'

export class CreateVehicleDto {
    @IsNumber()
    type: VehicleTypes

    @IsString()
    model: string;

    @IsNumber()
    price: number;

    @IsString()
    currency: string;

    @IsDate()
    year: Date;

    @IsNumber()
    mileage: number

    @IsNumber()
    carrying: number

    @IsString()
    countryNumber: string
}
