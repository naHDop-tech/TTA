import { IsString, IsNumber, IsEmail } from 'class-validator';

import { RoadTypes, Measures } from '@constants/road-type.constant'

export class CreateRoadDto {
    @IsString()
    name: string

    @IsString()
    type: RoadTypes;

    @IsNumber()
    distance: number;

    @IsString()
    measure: Measures
}
