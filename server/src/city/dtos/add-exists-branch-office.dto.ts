import { IsUUID } from 'class-validator';

export class AddExistsBranchOfficeDto {
    @IsUUID()
    cityId: number;

    @IsUUID()
    branchOfficeId: number;
}