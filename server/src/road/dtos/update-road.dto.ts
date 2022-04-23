import { IsString, IsNumber, IsOptional } from 'class-validator';

import { RoadTypes, Measures } from '@constants/road-type.constant'

export class UpdateRoadDto {
    @IsString()
    @IsOptional()
    name?: string

    @IsString()
    @IsOptional()
    type?: RoadTypes;

    @IsNumber()
    @IsOptional()
    distance?: number;

    @IsString()
    @IsOptional()
    measure?: Measures
}
