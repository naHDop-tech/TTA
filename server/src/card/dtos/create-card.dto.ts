import { IsString, IsNumber, IsEmail } from 'class-validator';

import { CardTypes, CardPaymentSystems } from '@constants/card.constant'

export class CreateCardDto {
    @IsString()
    type: CardTypes;

    @IsString()
    paymentSystem: CardPaymentSystems;

    @IsString()
    cardHolder: string

    @IsNumber()
    bankAccountId: number;
}
