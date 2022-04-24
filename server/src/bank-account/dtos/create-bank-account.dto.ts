import { IsString, IsNumber, IsEmail } from 'class-validator';

import { CurrencyTypes } from '@constants/currency.constant'
import { UserTypes } from '@root/constants/customer.constant'

export class CreateBankAccountDto {
    @IsString()
    currency: CurrencyTypes;

    @IsString()
    userFirstName: string;

    @IsString()
    userSecondName: string;

    @IsNumber()
    userAge: number;

    @IsEmail()
    userEmail: string

    @IsNumber()
    userType: UserTypes;
}
