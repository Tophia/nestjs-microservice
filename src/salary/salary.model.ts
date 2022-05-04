/* eslint-disable prettier/prettier */
import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table
export class Salary extends Model<Salary> {
  
  @Column({
    type: DataType.BIGINT,
})
employee_id:number

@Column({
  type: DataType.BIGINT,
  allowNull: false,
})
  amount: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: new Date()
  })
  from_date:Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: new Date()
  })  
  to_date:Date;
}
