import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { RoadTypes, Measures } from '@constants/road-type.constant'
import { IRoad } from '@root/road/interfaces/road.interface'

@Entity('roads')
export class RoadEntity implements IRoad {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    name: string;

   @Column()
   type: RoadTypes;

   @Column()
   distance: number;

   @Column({ default: 'km' })
   measure: Measures;
}