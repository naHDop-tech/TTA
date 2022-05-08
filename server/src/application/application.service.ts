import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PropNotProvided } from '@root/decorators/props-not-provided.decorator'
import { ApplicationEntity } from '@root/application/application.entity'
import { ApplicationCreateDto } from '@root/application/dtos/application-create.dto'

import { CustomerService } from '@root/customer/customer.service'

@Injectable()
export class ApplicationService {
    constructor(
        @InjectRepository(ApplicationEntity) private readonly applicationRepository: Repository<ApplicationEntity>,
        private readonly customerService: CustomerService,
    ) {}

    async create(payload: ApplicationCreateDto): Promise<ApplicationEntity> {
        const newApplication = this.applicationRepository.create(payload);
        const customer = await this.customerService.findById(payload.customerId)

        if (!customer) {
            throw new NotFoundException('Customer not found');
        }

        newApplication.customer = customer
        // TODO:
        // newApplication.destinationOffice = 

        return this.applicationRepository.save(newApplication)
    }

    @PropNotProvided('Office Id')
    async findByDestinationOfficeId(officeId: number): Promise<ApplicationEntity> {
        return await this.applicationRepository.findOne({ where: { destinationOffice: { id: officeId} } });
    }

    @PropNotProvided('Id')
    async removeById(id: number) {
        const application = await this.applicationRepository.findOne({ where: { id }})

        if (!application) {
          throw new NotFoundException('Application not found');
        }

        return this.applicationRepository.remove(application);
    }

    async findAll(take: number = 10, skip: number = 0, branchOfficeId: number): Promise<ApplicationEntity[]> {
        return await this.applicationRepository.find(
            {
                where: { destinationOffice: { id: branchOfficeId } },
                take: take,
                skip: skip
            },
        );
    }

}