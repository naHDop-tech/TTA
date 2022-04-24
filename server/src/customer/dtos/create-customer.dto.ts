import { IsString, IsNumber, IsEmail } from 'class-validator';

import { UserTypes } from '@root/constants/customer.constant'

export class CreateCustomerDto {
    @IsString()
    firstName: string;

    @IsString()
    secondName: string;

    @IsNumber()
    age: number;

    @IsEmail()
    email: string

    @IsNumber()
    type: UserTypes;
}
