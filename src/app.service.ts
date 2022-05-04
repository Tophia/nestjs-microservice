import { Inject, Injectable } from '@nestjs/common';
import { SalaryCreateInputDto } from './salary/dto/create-salary.dto';
import { SALARY_REPOSITORY } from './constants/index';
import { Salary } from './salary/salary.model';
// import { SalaryRepository } from './salary.repository';

@Injectable()
export class AppService {
  constructor(
    @Inject(SALARY_REPOSITORY)
    private readonly salaryRepository: typeof Salary,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  public async createItem(
    salaryCreateInputDto: SalaryCreateInputDto,
  ): Promise<Salary> {
    // const salary = new SalaryCreateInputDto();
    // salary.amount = SalaryCreateInputDto.amount;
    return await this.salaryRepository.create({
      amount: salaryCreateInputDto.amount,
      employee_id: salaryCreateInputDto.employee_id,
    });
  }

  public async getItemById(id) {
    return this.salaryRepository.findOne(id);
  }
}
