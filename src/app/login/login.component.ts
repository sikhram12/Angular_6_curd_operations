import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AppService } from '../app.service';

@Component({ 
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    showErrorMessage = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private readonly appService: AppService
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) { 
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
       
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        var UserLogin = { 
            username:this.f.username.value, 
            password:this.f.password.value 
         }; 

        //this.loading = true;
        //this.appService.login(UserLogin)
        // this.appService.login(UserLogin).subscribe({
        //     next: (data) => {
        //         console.log(data);
        //         this.router.navigate(['/employee']);
        //     },
        //     error: error => {
        //         this.showErrorMessage = true;
        //     }
        // });
        this.appService.login(UserLogin).subscribe(data=>{
            console.log(data);
            if(data=='Sucess'){
                this.router.navigate(['/employee']);
            } else{

             this.showErrorMessage = true;

            }
        });

        
}
clearLoginData() {
    // Clear login data logic goes here...
  }
}
