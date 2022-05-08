import { IsString, MinLength, MaxLength, IsEmail, IsNumber, IsUUID, Max, Min } from 'class-validator';

import { RoleTypes } from '@constants/employee.constant'

export class CreateEmployeeDto {
    @IsString()
    @MinLength(3)
    @MaxLength(18)
    firstName: string;

    @IsString()
    @MinLength(3)
    @MaxLength(18)
    secondName: string;

    @IsNumber()
    @Min(18)
    @Max(65)
    age: number;

    @IsEmail()
    email: string;

    @IsString()
    role: RoleTypes;

    @IsNumber()
    salary: number;

    @IsString()
    position: string;

    @IsString()
    internalPhone: string;

    @IsUUID()
    branchOfficeId: string
}
