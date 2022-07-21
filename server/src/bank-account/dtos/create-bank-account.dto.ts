import { IsString, IsNumber, IsEmail } from 'class-validator';

import { CurrencyTypes } from '@constants/currency.constant'
import { CustomerTypes } from '@root/constants/customer.constant'

export class CreateBankAccountDto {
    @IsString()
    currency: CurrencyTypes;

    @IsString()
    customerFirstName: string;

    @IsString()
    customerSecondName: string;

    @IsNumber()
    customerAge: number;

    @IsEmail()
    customerEmail: string

    @IsNumber()
    customerType: CustomerTypes;
}
