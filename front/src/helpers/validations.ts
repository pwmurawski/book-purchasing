/* eslint-disable default-param-last */
import { IRule, Rules } from "../interfaces/validationRulesInterfaces";

export function validateZipCode(text: string) {
  const re = /\d{2}-\d{3}/;
  return re.test(text);
}

const availableRules = {
  required(value: string) {
    return value ? "" : "Pole wymagane";
  },
  min(value: string, rule: IRule) {
    return value.length >= rule.length ? "" : `Min. znaków: ${rule.length}`;
  },
  zipCode(value: string) {
    return validateZipCode(value) ? "" : "Niepoprawny zip code";
  },
};

export function validate(rules: Rules = [], value: string) {
  let error = "";

  rules.forEach((rule) => {
    if (rule instanceof Object) {
      const errorMessage = availableRules[rule.rule](value, rule);
      if (errorMessage) {
        error = errorMessage;
      }
    } else {
      const errorMessage = availableRules[rule](value);
      if (errorMessage) {
        error = errorMessage;
      }
    }
  });

  return error;
}
