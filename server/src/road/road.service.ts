import {
    Injectable,
    NotFoundException,
    ConflictException,
} from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PropNotProvided } from '@root/decorators/props-not-provided.decorator'
import { RoadEntity } from '@root/road/road.entity'
import { CreateRoadDto } from '@root/road/dtos/create-road.dto'
import { UpdateRoadDto } from '@root/road/dtos/update-road.dto'

@Injectable()
export class RoadService {
    constructor(
        @InjectRepository(RoadEntity) private readonly roadRepository: Repository<RoadEntity>
    ) {}

    async create(payload: CreateRoadDto): Promise<RoadEntity> {
        const applicant = await this.roadRepository.findOne({ where: { name: payload.name }})

        if (applicant) {
            throw new ConflictException('Road already exist');
        }

        const newRoad = this.roadRepository.create(payload);

        return this.roadRepository.save(newRoad)
    }

    @PropNotProvided('Id')
    async findById(id: number): Promise<RoadEntity> {
        return await this.roadRepository.findOne({ where: { id } });
    }

    @PropNotProvided('Name')
    async findByName(name: string): Promise<RoadEntity> {
        return await this.roadRepository.findOne({ where: { name } });
    }

    @PropNotProvided('Id')
    async removeById(id: number): Promise<RoadEntity> {
        const road = await this.findById(id);

        if (!road) {
          throw new NotFoundException('Road not found');
        }

        return this.roadRepository.remove(road);
    }

    @PropNotProvided('Name')
    async removeByName(name: string): Promise<RoadEntity> {
        const road = await this.findByName(name);

        if (!road) {
          throw new NotFoundException('Road not found');
        }

        return this.roadRepository.remove(road);
    }

    async findAll(take: number = 10, skip: number = 0): Promise<RoadEntity[]> {
        return await this.roadRepository.find(
            {
                take: take,
                skip: skip
            }
        );
    }

    @PropNotProvided('Id')
    async updateById(id: number, payload: UpdateRoadDto): Promise<UpdateResult> {
        const applicant = this.roadRepository.findOneBy({ id })

        if (!applicant) {
            throw new NotFoundException('Road not found');
        }

        return this.roadRepository.update({ id }, payload)
        // const s = {...(payload ? payload : null)}
        // return this.roadRepository.save({
        //     ...applicant,
        //     ...payload,
        // })
    }
}