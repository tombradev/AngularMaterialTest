import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService { // name of the class that is imported

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null), // this is the primary key for the form controls
    firstName: new FormControl('', Validators.required), // adding validators for first name and last name a required field
    lastName: new FormControl('', Validators.required), // adding validators for first name and last name a required field
    email: new FormControl('', Validators.email), // adding validators for first name and last name a required field
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]), // adding validators for mobile and length
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl('0'),
    hireDate: new FormControl ('False')
  });

}
