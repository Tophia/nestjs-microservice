import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { SalaryModule } from './salary/salary.module';
import { Salary } from './salary/salary.model';
import { salaryProviders } from './salary/salary.providers';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'filter',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Salary]),
    SalaryModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...salaryProviders],
})
export class AppModule {}
