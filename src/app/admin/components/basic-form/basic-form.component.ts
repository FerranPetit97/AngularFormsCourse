import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  getNameValue() {
    console.log(this.nameField);
  }

  get nameField() {
    return this.form.get('name');
  }
  get emailField() {
    return this.form.get('email');
  }
  get phoneField() {
    return this.form.get('phone');
  }
  get dateField() {
    return this.form.get('color');
  }
  get colorField() {
    return this.form.get('date');
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

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: [''],
      phone: ['', Validators.required],
      color: [''],
      date: [''],
      age: [12],
      category: [''],
      tag: [''],
      agree: [false],
      gender: [''],
      zone: [''],
      preference: [''],
    });
  }
}
