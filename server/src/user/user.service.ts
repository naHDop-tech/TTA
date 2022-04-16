import {
    Injectable,
    NotFoundException,
    ConflictException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '@root/user/user.entity'
import { CreateUserDto } from '@root/user/dtos/create-user.dto'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) {}

    async create(user: CreateUserDto): Promise<User> {
        const applicant = await this.userRepository.findOne({ where: { email: user.email }})

        if (applicant) {
            throw new ConflictException('User already exist');
        }

        const newVehicle = this.userRepository.create(user);

        return this.userRepository.save(newVehicle)
    }

    async findById(id: number): Promise<User> {
        if (!id) {
          throw new NotFoundException('Vehicle not found');
        }

        return await this.userRepository.findOne({ where: { id } });
    }


    async removeById(id: number): Promise<User> {
        const user = await this.findById(id);

        if (!user) {
          throw new NotFoundException('User not found');
        }

        return this.userRepository.remove(user);
    }

    async findAll(take: number = 10, skip: number = 0): Promise<User[]> {
        return await this.userRepository.find(
            {
                take: take,
                skip: skip
            }
        );
    }

}