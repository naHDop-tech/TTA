import {
    Injectable,
    NotFoundException,
    ConflictException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PropNotProvided } from '@root/decorators/props-not-provided.decorator'

import { VehicleEntity } from '@root/vehicle/vehicle.entity'
import { CreateVehicleDto } from '@root/vehicle/dtos/create-vehicle.dto'

@Injectable()
export class VehicleService {
    constructor(
        @InjectRepository(VehicleEntity) private readonly vehicleRepository: Repository<VehicleEntity>,
    ) {}

    async create(payload: CreateVehicleDto): Promise<VehicleEntity> {
        const applicant = await this.vehicleRepository.findOne({ where: { countryNumber: payload.countryNumber }})

        if (applicant?.countryNumber === payload.countryNumber) {
            throw new ConflictException('Vehicle already exist');
        }

        const newVehicle = this.vehicleRepository.create(payload);

        return this.vehicleRepository.save(newVehicle)
    }

    @PropNotProvided('Id')
    async findById(id: number): Promise<VehicleEntity> {
        return await this.vehicleRepository.findOne({ where: { id } });
    }

    @PropNotProvided('Number')
    async findByCountryNumber(number: string): Promise<VehicleEntity> {
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