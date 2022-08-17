import { AbstractControl } from '@angular/forms';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';

export class MyValidators {
  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);
    if (value > 10000) {
      return { price_invalid: true };
    }
    return null;
  }

  static validPassword(control: AbstractControl) {
    const value = control.value;
    if (!containsNumber(value)) {
      return { invalid_password: true };
    }

    return null;
  }

  static matchPasswords(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    if (password === confirmPassword) {
      return null;
    }

    return { invalid_match: true };
  }

  // static validSum(control: AbstractControl) {
  //   const number = control.get('number').value;
  //   const number2 = control.get('number2').value;
  //   if (number + number2 <= 100 && number + number2 >= 0) {
  //     return null;
  //   }

  //   return { invalid_sum: true };
  // }
}

const containsNumber = (value: string) => {
  return value.split('').find((v) => isNumber(v)) != undefined;
};

const isNumber = (value: string) => {
  return !isNaN(parseInt(value, 10));
};
