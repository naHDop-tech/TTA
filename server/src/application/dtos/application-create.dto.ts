import { IsString, MinLength, MaxLength, IsEmail, IsNumber, IsUUID } from 'class-validator';

import { CurrencyTypes } from '@root/constants/currency.constant';

export class ApplicationCreateDto {
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    description: string;

    @IsNumber()
    amount: number;

    @IsNumber()
    salary: number;

    @IsString()
    currency: CurrencyTypes;

    @IsUUID()
    destinationOfficeId: number

    @IsUUID()
    branchOfficeId: number

    @IsUUID()
    customerId: number
}