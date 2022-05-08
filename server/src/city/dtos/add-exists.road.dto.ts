import { IsUUID } from 'class-validator';

export class AddExistsRoadDto {
    @IsUUID()
    cityId: number;

    @IsUUID()
    roadId: number;
}