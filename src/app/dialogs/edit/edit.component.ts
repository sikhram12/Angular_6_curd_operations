import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeObject } from 'src/app/employee/employee';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddComponent } from '../add/add.component';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  

  form: FormGroup;
  emp: EmployeeObject = new EmployeeObject();
  mode:string;
  ida:string;

  constructor(private readonly cdr: ChangeDetectorRef, public dialogRef: MatDialogRef<EditComponent>, private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data, public dataService: AppService) {
    console.log("&&"+dialogRef)
    console.log("&&"+ data.emp)
    this.emp = data.abc;
    console.log("^^^"+data.mode)
    console.log("&&"+ this.emp.id)
      
     }

     ngAfterViewInit() {
      this.cdr.detectChanges();
    }

    ngOnInit() {
     
        this.form = this.fb.group({
           firstName: [this.emp.firstName],
           lastName: [this.emp.lastName],
           age: [this.emp.age],
           experience: [this.emp.experience],
           phone: [this.emp.phone],
          streetAdress: [this.emp.streetAdress],
          city: [this.emp.city],
          state: [this.emp.state],
          zipcode: [this.emp.zipcode],
          workingDays: [this.emp.workingDays],
          joinDate: [this.emp.joinDate],
        });
      }

      close() {
        this.dialogRef.close();
      }

      save() {
       // this.validateReqFields();
        // const empObj : EmployeeObject = {
        //   firstName : this.form.get('firstName').value,
        //   lastName : this.form.get('lastName').value,
        //   age : this.form.get('age').value
        // }; 
        console.log(this.form.get('firstName').value)
          //this.emp = new EmployeeObject();
          this.emp.id;
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

