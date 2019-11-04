import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeObject, ClientDetails } from 'src/app/employee/employee';
import { AppService } from 'src/app/app.service';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  form: FormGroup;
  emp: EmployeeObject;
  invalidFormFlag = false;
  private readonly clientDetailsSubject = new Subject<ClientDetails>();
  monthlyActivityList: Map<string, Map<string, string>>;
  repos = new Map<string, Map<string, string>>();
  innerMap = new Map<string, string>();
  states: Array<string> = [];
  cities: Array<string> = [];
  zipcodes: Array<string> = [];

  constructor(private readonly cdr: ChangeDetectorRef, public dialogRef: MatDialogRef<AddComponent>, private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data,
    public dataService: AppService) {
    this.emp = data.repository;
    this.form = fb.group({
      'phone': ['', [Validators.min(5)]]
    });

    dataService.stateWithCities().subscribe((c: any) => {

      this.repos = new Map<string, Map<string, string>>(Object.entries(c));
      this.repos.forEach((repoList: Map<string, string>, app: string) => {
        const repositoryList = new Map<string, string>(Object.entries(repoList));
        this.repos.set(app, repositoryList);
        console.log(app)
        this.states.push(app);
      });
      console.log("map : " + this.states);


    });

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
      this.emp.joinDate = this.form.get('joinDate').value;
      console.log("@@" + this.emp.joinDate)
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

  getCities(element: any) {

    this.repos.forEach((repoList: Map<string, string>, app: string) => {

      if (element == app) {
        this.innerMap.clear();
        console.log("after clear" + this.innerMap)
        this.innerMap = this.repos.get(app);
        this.cities = new Array();
        this.innerMap.forEach((k: string, v: string) => {
          this.cities.push(v);

        })
      }
    });



  }
  
  getZipcode(element: any) {
    console.log("&&&&" + element)

    this.repos.forEach((repoList: Map<string, string>, app: string) => {

      if (repoList.get(element)) {
        this.zipcodes = new Array();
        console.log("after repoList " + repoList)
        this.zipcodes.push(repoList.get(element));
      }
    });
  }

}


