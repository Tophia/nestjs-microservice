/* eslint-disable prettier/prettier */
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class SalaryCreateInputDto {
  @Field(() => Int, { nullable: true }) employee_id: number;
  @Field(() => Int, { nullable: true }) amount: number;
}
@InputType()
export class SalaryUpdateDto {
  // @Field(() => Int, { nullable: true }) employee_id: number;
  @Field(() => Int, { nullable: true }) amount: number;
}