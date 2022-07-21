import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
} from 'typeorm';

import { VehicleTypes } from '@root/constants/vehicle.constant'
import { RepairCost } from '@root/utils/RepairCost'
import { Expose } from 'class-transformer';
import { IVehicle } from '@root/vehicle/interfaces/vehicle.interface'
import { BranchOfficeEntity } from '@root/branch-office/branch-office.entity'


@Entity('vehicles')
export class VehicleEntity implements IVehicle {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    type: VehicleTypes

    @Column()
    model: string;

    @Column()
    price: number;

    @Column()
    currency: string

    @Column()
    year: Date;

    @Column()
    mileage: number

    @Column()
    carrying: number

    @Column()
    countryNumber: string

    @Column({ default: 0 })
    repairCondition: number

    @Column({ default: false })
    isChecked: boolean

    @ManyToOne(() => BranchOfficeEntity, (office) => office.vehicles)
    branchOffice: BranchOfficeEntity

    @Expose()
    get isReadyToRace(): boolean {
        return this.isChecked
    }

    @Expose()
    get repairCost(): number {
        const repairCoast = new RepairCost(this)
        return repairCoast.currentRepairPrice
    }
}
