import { useEffect, useState } from "react";
import { Form } from "./styles/OrderFormStyles";
import InputCustom from "../InputCustom/InputCustom";
import { validate } from "../../helpers/validations";
import {
  FormDataFieldNames,
  IOrderForm,
  IOrderFormProps,
} from "../../interfaces/OrderFormInterfaces";

const initForm: IOrderForm = {
  firstName: {
    value: "",
    rules: ["required", { rule: "min", length: 4 }],
  },
  lastName: {
    value: "",
    rules: ["required", { rule: "min", length: 5 }],
  },
  city: {
    value: "",
    rules: ["required"],
  },
  code: {
    value: "",
    rules: ["required", "zipCode"],
  },
};

export default function OrderForm({ userOrderData, isError }: IOrderFormProps) {
  const [formData, setFormData] = useState<IOrderForm>(initForm);

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

  useEffect(() => {
    userOrderData({
      firstName: formData.firstName.value,
      lastName: formData.lastName.value,
      city: formData.city.value,
      code: formData.code.value,
    });

    if (
      typeof formData.firstName.error !== "undefined" &&
      typeof formData.lastName.error !== "undefined" &&
      typeof formData.city.error !== "undefined" &&
      typeof formData.code.error !== "undefined"
    ) {
      isError(
        !(
          !formData.firstName.error &&
          !formData.lastName.error &&
          !formData.city.error &&
          !formData.code.error
        )
      );
    }
  }, [formData]);

  return (
    <Form>
      <InputCustom
        value={formData.firstName.value}
        onChange={(e) => changeHandler(e.target.value, "firstName")}
        placeholder="Imie"
        error={formData.firstName.error}
      />
      <InputCustom
        value={formData.lastName.value}
        onChange={(e) => changeHandler(e.target.value, "lastName")}
        placeholder="Nazwisko"
        error={formData.lastName.error}
      />
      <InputCustom
        value={formData.city.value}
        onChange={(e) => changeHandler(e.target.value, "city")}
        placeholder="Miejscowość"
        error={formData.city.error}
      />
      <InputCustom
        value={formData.code.value}
        onChange={(e) => changeHandler(e.target.value, "code")}
        placeholder="Kod pocztowy"
        error={formData.code.error}
      />
    </Form>
  );
}
