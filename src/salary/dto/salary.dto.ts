/* eslint-disable prettier/prettier */
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SalaryDto {
  @Field(() => Int, { nullable: true }) id: number;
  @Field(() => Int, { nullable: true }) employee_id: number;
  @Field(() => Int, { nullable: true }) amount: number;
  @Field({ nullable: false }) createdAt: Date;
  @Field({ nullable: false }) updatedAt: Date;
}
