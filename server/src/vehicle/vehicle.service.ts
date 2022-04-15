import {
    Injectable,
    NotFoundException,
    ConflictException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Vehicle } from '@root/vehicle/vehicle.entity'
import { CreateVehicleDto } from '@root/vehicle/dtos/create-vehicle.dto'

@Injectable()
export class VehicleService {
    constructor(
        @InjectRepository(Vehicle) private readonly vehicleRepository: Repository<Vehicle>,
    ) {}

    async create(vehicle: CreateVehicleDto): Promise<Vehicle> {
        const applicant = await this.vehicleRepository.findOne({ where: { countryNumber: vehicle.countryNumber }})

        if (applicant?.countryNumber === vehicle.countryNumber) {
            throw new ConflictException('Vehicle already exist');
        }

        const newVehicle = this.vehicleRepository.create(vehicle);

        return this.vehicleRepository.save(newVehicle)
    }

    async findById(id: number): Promise<Vehicle> {
        if (!id) {
          throw new NotFoundException('Vehicle not found');
        }

        return await this.vehicleRepository.findOne({ where: { id } });
    }

    async findByCountryNumber(number: string): Promise<Vehicle> {
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

    async findAll(take: number = 10, skip: number = 0): Promise<Vehicle[]> {
        return await this.vehicleRepository.find(
            {
                take: take,
                skip: skip
            }
        );
    }

}