import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup , Validators, AbstractControl} from '@angular/forms';
import {  Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  validateLoading = false;
  err: string;
  sucess: string;
  formgroup: FormGroup ;
  email: AbstractControl;
  password: AbstractControl;
companyname: AbstractControl;
  constructor(public formbuilder: FormBuilder, private router: Router, private service: MainService) {

    this.formgroup = formbuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      companyname: ['', Validators.required]
});
this.email = this.formgroup.controls['email'];
this.password =  this.formgroup.controls['password'];
this.companyname =  this.formgroup.controls['companyname'];

   }
  ngOnInit() {
  }
  onSubmit(formgroup) {
    this.validateLoading = true;
    return this.service.Register(formgroup.value).then((data)  =>  {
 
      this.validateLoading = false;
      this.sucess = 'You have successfully register';
      setTimeout(() => {
       this.sucess = null;
      }, 2000);
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
