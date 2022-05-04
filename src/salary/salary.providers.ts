/* eslint-disable prettier/prettier */

import { SALARY_REPOSITORY } from "src/constants";
import { Salary } from "./salary.model";

export const salaryProviders = [
    {
        provide: SALARY_REPOSITORY,
        useValue: Salary,
    },
];
