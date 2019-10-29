import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeObject } from 'src/app/employee/employee';
import { AppService } from 'src/app/app.service';
import { EmployeeComponent } from 'src/app/employee/employee.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  form: FormGroup;
  emp: EmployeeObject;
  invalidFormFlag = false;

  constructor(private readonly cdr: ChangeDetectorRef, public dialogRef: MatDialogRef<AddComponent>, private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data,
    public dataService: AppService) {
    this.emp = data.repository;
    this.form = fb.group({
      // Adding the "myNum" input to our FormGroup along with its min-max Validators.
      'phone': ['', [Validators.min(5)]]
    })
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit() {

    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: [''],
      experience: ['', []],
      phone: ['', []],
      streetAdress: [''],
      city: ['', []],
      state: ['', []],
      zipcode: [''],
      workingDays: ['', []],
      joinDate: ['', []],
    });
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.validateReqFields();
    if (!this.invalidFormFlag) {
    this.emp = new EmployeeObject();

    this.emp.firstName = this.form.get('firstName').value;
    this.emp.lastName = this.form.get('lastName').value;
    this.emp.age = this.form.get('age').value;
    this.emp.experience = this.form.get('experience').value;
    this.emp.phone = this.form.get('phone').value;
    this.emp.streetAdress = this.form.get('streetAdress').value;
    this.emp.city = this.form.get('city').value;
    this.emp.state = this.form.get('state').value;
    this.emp.zipcode = this.form.get('zipcode').value;
    this.emp.workingDays = this.form.get('workingDays').value;
    // this.emp.joinDate = this.form.get('joinDate').value;

    this.dialogRef.close(this.emp);
    }

  }

  validateReqFields() {
    if (this.form.get('firstName').value === "" || this.form.get('lastName').value === "" || this.form.get('experience').value === "") {
      this.invalidFormFlag = true;
    } else {
      this.invalidFormFlag = false;
    }
  }

}






























//   formControl = new FormControl('', [
//     Validators.required
//     // Validators.email,
//   ]);

//   getErrorMessage() {
//     return this.formControl.hasError('required') ? 'Required field' :
//       this.formControl.hasError('email') ? 'Not a valid email' :
//         '';
//   }

//   submit() {
//     // emppty stuff
//   }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// //daa: EmployeeObject
//   public confirmAdd(): void {
//     //this.emp.firstName = this.form.get('firstName').value;
//     console.log('@@'+this.data.firstName);
//     this.dataService.addNewEmployee(this.data);
//   }


