import { IsString, MinLength, MaxLength, IsEmail, IsNumber, IsUUID } from 'class-validator';

export class CityCreateDto {
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    name: string;

    @IsNumber()
    population: number;
}