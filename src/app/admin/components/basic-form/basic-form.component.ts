import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  form: FormGroup;

  preferences: string[] = [];
  preferencesData: { name: string }[] = [
    { name: 'Informática' },
    { name: 'Matemáticas' },
    { name: 'Inglés' },
    { name: 'Física' },
  ];

  prefixes = [
    { value: 'ES', viewValue: '+1' },
    { value: 'IN', viewValue: '+2' },
    { value: 'AL', viewValue: '+3' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    // this.nameField.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    // this.form.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }

  getNameValue() {
    console.log(this.nameField);
  }

  get nameField() {
    return this.form.get('fullName.name');
  }
  get lastField() {
    return this.form.get('fullName.last');
  }
  get emailField() {
    return this.form.get('email');
  }
  get phoneField() {
    return this.form.get('phone');
  }
  get dateField() {
    return this.form.get('date');
  }
  get colorField() {
    return this.form.get('color');
  }
  get ageField() {
    return this.form.get('age');
  }
  get categoryField() {
    return this.form.get('category');
  }
  get tagField() {
    return this.form.get('tag');
  }
  get agreeField() {
    return this.form.get('agree');
  }
  get genderField() {
    return this.form.get('gender');
  }
  get zoneField() {
    return this.form.get('zone');
  }
  get preferenceField() {
    return this.form.get('preference');
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }
  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

  save(event) {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  addPreference(name) {
    if (this.preferenceField.value) this.preferences.push(name);
    else {
      this.preferences.splice(this.preferences.indexOf(name), 1);
    }
  }

  getErrorMessageEmail() {
    if (this.emailField.errors?.['required']) {
      return 'You must enter a value';
    }
    if (this.emailField.errors?.['email']) {
      return 'Invalid Email';
    }

    return 'Check carefully the form';
  }

  getErrorMessageName() {
    if (this.nameField.errors?.['required']) {
      return 'You must enter a value';
    }
    if (this.nameField.errors?.['maxlength']) {
      return 'Is more than 10 letters';
    }
    if (this.nameField.errors?.['pattern']) {
      return 'Invalid characters';
    }

    return 'Check carefully the form';
  }

  getErrorMessageLastName() {
    if (this.lastField.errors?.['required']) {
      return 'You must enter a value';
    }
    if (this.lastField.errors?.['maxlength']) {
      return 'Is more than 10 letters';
    }
    if (this.lastField.errors?.['pattern']) {
      return 'Invalid characters';
    }

    return 'Check carefully the form';
  }

  getErrorMessagePhone() {
    if (this.phoneField.errors?.['required']) {
      return 'You must enter a value';
    }
    if (this.phoneField.errors?.['pattern']) {
      return 'It must be a number';
    }

    return 'Check carefully the form';
  }

  getErrorMessageAge() {
    if (this.ageField.errors?.['required']) {
      return 'You must enter a value';
    }
    if (this.ageField.errors?.['min']) {
      return 'You must be of legal age';
    }
    if (this.ageField.errors?.['max']) {
      return 'You cannot be more than 100 years old';
    }

    return 'Check carefully the form';
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      fullName: this.formBuilder.group({
        name: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z]+$/),
          ],
        ],
        last: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z]+$/),
          ],
        ],
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      color: [''],
      date: [''],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      category: [''],
      tag: [''],
      agree: [false, [Validators.requiredTrue]],
      gender: [''],
      zone: [''],
      preference: [''],
    });
  }
}
