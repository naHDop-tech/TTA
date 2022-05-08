import {
    Injectable,
    NotFoundException,
    ConflictException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PropNotProvided } from '@root/decorators/props-not-provided.decorator'

import { CityEntity } from '@root/city/city.entity'
import { CityCreateDto } from '@root/city/dtos/create-city.dto'

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity) private readonly cityRepository: Repository<CityEntity>,
    ) {}

    async create(payload: CityCreateDto): Promise<CityEntity> {
        const applicant = await this.cityRepository.findOne({ where: { name: payload.name }})

        if (applicant) {
            throw new ConflictException('City as already exists');
        }

        const newCity = this.cityRepository.create(applicant);

        return this.cityRepository.save(newCity)
    }

    @PropNotProvided('Id')
    async findById(id: number): Promise<CityEntity> {
        return await this.cityRepository.findOne({ where: { id } });
    }

    @PropNotProvided('Name')
    async findByName(name: string): Promise<CityEntity> {
        return await this.cityRepository.findOne({ where: { name } });
    }

    async removeById(id: number) {
        const city = await this.findById(id);

        if (!city) {
          throw new NotFoundException('City not found');
        }

        return this.cityRepository.remove(city);
    }

    async findAll(take: number = 10, skip: number = 0): Promise<CityEntity[]> {
        return await this.cityRepository.find(
            {
                take: take,
                skip: skip
            }
        );
    }

}