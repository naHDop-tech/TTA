import { IsString, IsNumber, IsOptional } from 'class-validator';

import { RoadTypes, Measures } from '@constants/road-type.constant'

export class CreateRoadDto {
    @IsString()
    name: string

    @IsString()
    type: RoadTypes;

    @IsNumber()
    distance: number;

    @IsString()
    @IsOptional()
    measure?: Measures
}
