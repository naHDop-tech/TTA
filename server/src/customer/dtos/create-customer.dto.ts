import { IsString, IsNumber, IsEmail } from 'class-validator';

import { UserTypes } from '@constants/user.constant'

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
