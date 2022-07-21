import {
    Injectable,
    NotFoundException,
    ConflictException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PropNotProvided } from '@root/decorators/props-not-provided.decorator'

import { BranchOfficeEntity } from '@root/branch-office/branch-office.entity'
import { BranchOfficeCreateDto } from '@root/branch-office/dtos/create-branch-office.dto'

@Injectable()
export class BranchOfficeService {
    constructor(
        @InjectRepository(BranchOfficeEntity) private readonly branchOfficeRepository: Repository<BranchOfficeEntity>,
    ) {}

    async create(payload: BranchOfficeCreateDto): Promise<BranchOfficeEntity> {
        const applicant = await this.findByName(payload.name)

        if (applicant) {
            throw new ConflictException('BranchOffice as already exists');
        }

        const newBranchOffice = this.branchOfficeRepository.create(applicant);

        return this.branchOfficeRepository.save(newBranchOffice)
    }

    @PropNotProvided('Id')
    async findById(id: number): Promise<BranchOfficeEntity> {
        return await this.branchOfficeRepository.findOne({ where: { id } });
    }

    @PropNotProvided('Name')
    async findByName(name: string): Promise<BranchOfficeEntity> {
        return await this.branchOfficeRepository.findOne({ where: { name } });
    }

    async removeById(id: number) {
        const officeBranch = await this.findById(id);

        if (!officeBranch) {
          throw new NotFoundException('OfficeBranch not found');
        }

        return this.branchOfficeRepository.remove(officeBranch);
    }

    async findAll(take: number = 10, skip: number = 0): Promise<BranchOfficeEntity[]> {
        return await this.branchOfficeRepository.find(
            {
                take: take,
                skip: skip
            }
        );
    }

}