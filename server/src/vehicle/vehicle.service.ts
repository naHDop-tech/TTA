import {
    Injectable,
    NotFoundException,
    ConflictException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { VehicleEntity } from '@root/vehicle/vehicle.entity'
import { CreateVehicleDto } from '@root/vehicle/dtos/create-vehicle.dto'

@Injectable()
export class VehicleService {
    constructor(
        @InjectRepository(VehicleEntity) private readonly vehicleRepository: Repository<VehicleEntity>,
    ) {}

    async create(vehicle: CreateVehicleDto): Promise<VehicleEntity> {
        const applicant = await this.vehicleRepository.findOne({ where: { countryNumber: vehicle.countryNumber }})

        if (applicant?.countryNumber === vehicle.countryNumber) {
            throw new ConflictException('Vehicle already exist');
        }

        const newVehicle = this.vehicleRepository.create(vehicle);

        return this.vehicleRepository.save(newVehicle)
    }

    async findById(id: number): Promise<VehicleEntity> {
        if (!id) {
          throw new NotFoundException('Vehicle not found');
        }

        return await this.vehicleRepository.findOne({ where: { id } });
    }

    async findByCountryNumber(number: string): Promise<VehicleEntity> {
        if (!number) {
          throw new NotFoundException('Vehicle not found');
        }

        return await this.vehicleRepository.findOne({ where: { countryNumber: number } });
    }

    async removeById(id: number) {
        const vehicle = await this.findById(id);

        if (!vehicle) {
          throw new NotFoundException('Vehicle not found');
        }

        return this.vehicleRepository.remove(vehicle);
    }

    async findAll(take: number = 10, skip: number = 0): Promise<VehicleEntity[]> {
        return await this.vehicleRepository.find(
            {
                take: take,
                skip: skip
            }
        );
    }

}