import { Module } from '@nestjs/common';
import { Salary } from './salary.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { salaryProviders } from './salary.providers';

@Module({
  imports: [SequelizeModule.forFeature([Salary])],
  providers: [...salaryProviders],
})
export class SalaryModule {}
