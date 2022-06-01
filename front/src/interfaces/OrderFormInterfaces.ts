/* eslint-disable no-unused-vars */
import { IUserOrderData } from "./interfaces";
import { Rules } from "./validationRulesInterfaces";

export interface IOrderForm {
  firstName: {
    value: string;
    error?: string;
    rules: Rules;
  };
  lastName: {
    value: string;
    error?: string;
    rules: Rules;
  };
  city: {
    value: string;
    error?: string;
    rules: Rules;
  };
  code: {
    value: string;
    error?: string;
    rules: Rules;
  };
}

export type FormDataFieldNames = "firstName" | "lastName" | "city" | "code";

export interface IOrderFormProps {
  userOrderData: (data: IUserOrderData) => void;
  isError: (isError: boolean) => void;
}
