/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { validate } from "../helpers/validations";
import { FormDataFieldNames } from "../interfaces/OrderFormInterfaces";

const useForm = <T>(
  initForm: T
): [formData: typeof formData, changeHandler: typeof changeHandler] => {
  const [formData, setFormData] = useState<any>(initForm);

  const changeHandler = (value: string, fieldName: FormDataFieldNames) => {
    const error = validate(formData[fieldName].rules, value);

    setFormData({
      ...formData,
      [fieldName]: {
        ...formData[fieldName],
        value,
        error,
      },
    });
  };

  return [formData, changeHandler];
};

export default useForm;
