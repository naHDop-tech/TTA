import {
    Injectable,
    NotFoundException,
    ConflictException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PropNotProvided } from '@root/decorators/props-not-provided.decorator'

import { CustomerEntity } from '@root/customer/customer.entity'
import { CreateCustomerDto } from '@root/customer/dtos/create-customer.dto'

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity) private readonly userRepository: Repository<CustomerEntity>,
    ) {}

    async create(user: CreateCustomerDto): Promise<CustomerEntity> {
        const applicant = await this.userRepository.findOne({ where: { email: user.email }})

        if (applicant) {
            throw new ConflictException('User already exist');
        }

        const newUser = this.userRepository.create(user);

        return this.userRepository.save(newUser)
    }

    @PropNotProvided('Id')
    async findById(id: number): Promise<CustomerEntity> {
        return await this.userRepository.findOne({ where: { id } });
    }

    async removeById(id: number): Promise<CustomerEntity> {
        const user = await this.findById(id);

        if (!user) {
          throw new NotFoundException('User not found');
        }

        return this.userRepository.remove(user);
    }

    async findAll(take: number = 10, skip: number = 0): Promise<CustomerEntity[]> {
        return await this.userRepository.find(
            {
                take: take,
                skip: skip
            }
        );
    }

}