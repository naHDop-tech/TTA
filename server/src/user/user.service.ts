import {
    Injectable,
    NotFoundException,
    ConflictException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PropNotProvided } from '@root/decorators/props-not-provided.decorator'

import { UserEntity } from '@root/user/user.entity'
import { CreateUserDto } from '@root/user/dtos/create-user.dto'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    ) {}

    async create(user: CreateUserDto): Promise<UserEntity> {
        const applicant = await this.userRepository.findOne({ where: { email: user.email }})

        if (applicant) {
            throw new ConflictException('User already exist');
        }

        const newUser = this.userRepository.create(user);

        return this.userRepository.save(newUser)
    }

    @PropNotProvided('Id')
    async findById(id: number): Promise<UserEntity> {
        return await this.userRepository.findOne({ where: { id } });
    }


    async removeById(id: number): Promise<UserEntity> {
        const user = await this.findById(id);

        if (!user) {
          throw new NotFoundException('User not found');
        }

        return this.userRepository.remove(user);
    }

    async findAll(take: number = 10, skip: number = 0): Promise<UserEntity[]> {
        return await this.userRepository.find(
            {
                take: take,
                skip: skip
            }
        );
    }

}