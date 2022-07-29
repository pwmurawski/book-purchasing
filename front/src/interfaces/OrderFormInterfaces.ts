/* eslint-disable no-unused-vars */
import { IUserOrderData } from "./interfaces";
import { Rules } from "./validationRulesInterfaces";

export interface IFormField {
  value: string;
  error?: string;
  rules: Rules;
}

export interface IOrderForm {
  firstName: IFormField;
  lastName: IFormField;
  city: IFormField;
  code: IFormField;
}

export type FormDataFieldNames = "firstName" | "lastName" | "city" | "code";

export interface IOrderFormProps {
  userOrderData: (data: IUserOrderData) => void;
  isError: (isError: boolean) => void;
}
