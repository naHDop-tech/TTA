

import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
} from 'typeorm';

import { IApplication } from '@root/application/interfaces/application.interface'

import { CurrencyTypes } from '@root/constants/currency.constant';

import { CustomerEntity } from '@root/customer/customer.entity'
import { BranchOfficeEntity } from '@root/branch-office/branch-office.entity';


@Entity('applications')
export class ApplicationEntity implements IApplication {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    description: string;

    @Column()
    amount: number;

    @Column()
    currency: CurrencyTypes;

    @ManyToOne(
        () => BranchOfficeEntity,
        (office) => office.applications,
        { eager: true }
    )
    destinationOffice: BranchOfficeEntity;

    @ManyToOne(
        () => CustomerEntity,
        (clients) => clients,
        { eager: true }
    )
    customer: CustomerEntity

}
