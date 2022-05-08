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
import { AddExistsBranchOfficeDto } from '@root/city/dtos/add-exists-branch-office.dto'
import { AddExistsRoadDto } from '@root/city/dtos/add-exists.road.dto'

import { BranchOfficeService } from '@root/branch-office/branch-office.service'
import { RoadService } from '@root/road/road.service'

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity) private readonly cityRepository: Repository<CityEntity>,
        private readonly branchOfficeService: BranchOfficeService,
        private readonly roadService: RoadService
    ) {}

    async create(payload: CityCreateDto): Promise<CityEntity> {
        const applicant = await this.cityRepository.findOne({ where: { name: payload.name }})

        if (applicant) {
            throw new ConflictException('City as already exists');
        }

        const newCity = this.cityRepository.create(applicant);

        return this.cityRepository.save(newCity)
    }

    async addExistsBranchOffice(payload: AddExistsBranchOfficeDto): Promise<CityEntity> {
        const applicantCity = await this.findById(payload.cityId)
        const applicantOffice = await this.branchOfficeService.findById(payload.branchOfficeId)

        if(!applicantCity || !applicantOffice) {
            throw new NotFoundException('City or Branch office not found');
        }

        if (applicantCity?.branchOffices.length) {
            applicantCity.branchOffices.push(applicantOffice)
        } else {
            applicantCity.branchOffices = [applicantOffice]
        }

        return this.cityRepository.save(applicantCity)
    }

    async addExistsRoad(payload: AddExistsRoadDto): Promise<CityEntity> {
        const applicantCity = await this.findById(payload.cityId)
        const applicantRoad = await this.roadService.findById(payload.roadId)

        if(!applicantCity || !applicantRoad) {
            throw new NotFoundException('City or Road not found');
        }

        if (applicantCity?.roads.length) {
            applicantCity.roads.push(applicantRoad)
        } else {
            applicantCity.roads = [applicantRoad]
        }

        return this.cityRepository.save(applicantCity)
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