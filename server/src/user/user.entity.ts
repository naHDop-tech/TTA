import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { User as AbstractionUser } from '@abstractions/user.abstract'
import { UserTypes } from '@constants/user.constant'

@Entity('users')
export class User extends AbstractionUser {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    email: string

    @Column()
    type: UserTypes;
}