import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup , Validators, AbstractControl} from '@angular/forms';
import {  Router } from '@angular/router';
import { MainService } from '../main.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formgroup: FormGroup ;
  email: AbstractControl;
  password: AbstractControl;
  validateLoading = false;
  err: string;
  constructor(public formbuilder: FormBuilder, private router: Router, private service: MainService) {

    this.formgroup = formbuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
});
this.email = this.formgroup.controls['email'];
this.password =  this.formgroup.controls['password'];
   }

  ngOnInit() {
  }
  onLogin(formgroup) {
    this.validateLoading = true;
    // console.log(formgroup );
  this.service.login(formgroup).then(res => {
 console.log(res);
 this.router.navigate(['dash']);
  })
  .catch(err => {
 console.log(err);
 this.validateLoading = false;
 this.err = err;
 setTimeout(() => {
  this.err = null;
 }, 1000);
  })
  ;
   }
}
