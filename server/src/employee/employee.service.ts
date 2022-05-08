import {
    Injectable,
    NotFoundException,
    ConflictException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PropNotProvided } from '@root/decorators/props-not-provided.decorator'
import { EmployeeEntity } from '@root/employee/employee.entity'
import { CreateEmployeeDto } from '@root/employee/dtos/create-employee.dto'

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(EmployeeEntity) private readonly employeeRepository: Repository<EmployeeEntity>,
    ) {}

    async create(employee: CreateEmployeeDto): Promise<EmployeeEntity> {
        const applicant = await this.findByEmail(employee.email)

        if (applicant) {
            throw new ConflictException('Employee already exist');
        }

        const newVehicle = this.employeeRepository.create(employee);

        // TODO: create branch
        // newVehicle.branchOffice = 

        return this.employeeRepository.save(newVehicle)
    }

    @PropNotProvided('Id')
    async findById(id: number): Promise<EmployeeEntity> {
        return await this.employeeRepository.findOne({ where: { id } });
    }

    @PropNotProvided('Email')
    async findByEmail(email: string): Promise<EmployeeEntity> {
        return await this.employeeRepository.findOne({ where: { email } });
    }

    async removeById(id: number) {
        const employee = await this.findById(id);

        if (!employee) {
          throw new NotFoundException('Employee not found');
        }

        return this.employeeRepository.remove(employee);
    }

    async findAll(take: number = 10, skip: number = 0, branchOfficeId: number): Promise<EmployeeEntity[]> {
        return await this.employeeRepository.find(
            {
                where: { branchOffice: { id: branchOfficeId } },
                take: take,
                skip: skip
            },
        );
    }

}