import { IsString, IsNumber, IsEmail } from 'class-validator';

import { UserTypes } from '@constants/user.constant'

export class CreateUserDto {
    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsEmail()
    email: string

    @IsNumber()
    type: UserTypes;
}
