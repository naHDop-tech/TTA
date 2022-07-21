import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmployeeController } from '@root/employee/employee.controller';
import { EmployeeService  } from '@root/employee/employee.service';
import { EmployeeEntity } from '@root/employee/employee.entity';

@Module({
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
  ],
  imports: [TypeOrmModule.forFeature([EmployeeEntity])],
  exports: [EmployeeService]
})


export class EmployeeModule {}
